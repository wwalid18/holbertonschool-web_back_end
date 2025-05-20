import fs from 'fs/promises';

export async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
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

    return fields;
  } catch (err) {
    throw err;
  }
}
