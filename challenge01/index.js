import fs from 'fs';
import { VALID_FIELDS } from '../lib/index.js';

const text = fs.readFileSync('data.txt', 'utf-8');

function getTotalValid(text) {
  let totalFieldsValid = 0;
  let usersValid = 0;
  const data = text.split('\n\n').filter(user => user !== '');
  data.forEach(user => {
    const userData = user.replaceAll('\n', ' ');

    VALID_FIELDS.forEach(field => {
      if (userData.includes(field)) totalFieldsValid++;
    });

    if (totalFieldsValid === VALID_FIELDS.length) usersValid++;
    totalFieldsValid = 0;
  });
  return usersValid;
}

console.log(getTotalValid(text));
