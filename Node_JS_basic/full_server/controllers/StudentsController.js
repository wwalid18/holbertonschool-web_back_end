import readDatabase from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const dbFile = process.argv[2];
    try {
      const fields = await readDatabase(dbFile);
      const sortedFields = Object.keys(fields).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );

      let response = 'This is the list of our students\n';
      for (const field of sortedFields) {
        response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }
      return res.status(200).send(response.trim());
    } catch {
      return res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const dbFile = process.argv[2];
    const major = req.params.major;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const fields = await readDatabase(dbFile);
      if (!fields[major]) {
        return res.status(200).send('List: ');
      }
      return res.status(200).send(`List: ${fields[major].join(', ')}`);
    } catch {
      return res.status(500).send('Cannot load the database');
    }
  }
}
