const express = require('express');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);

      const fields = {};
      for (const student of students) {
        const parts = student.split(',');
        const firstName = parts[0];
        const field = parts[3];
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
      }

      let output = `Number of students: ${students.length}\n`;
      for (const [field, names] of Object.entries(fields)) {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      resolve(output.trim());
    });
  });
}

const dbFile = process.argv[2];

const app = express();

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.type('text/plain');
  if (!dbFile) {
    res.send('Database file path not provided');
    return;
  }
  try {
    const studentList = await countStudents(dbFile);
    res.send(`This is the list of our students\n${studentList}`);
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(1245);

module.exports = app;
