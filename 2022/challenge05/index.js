import fs from 'fs';

let data = fs.readFileSync('mecenas.json', 'utf-8');
data = JSON.parse(data);

function getWinner(data, firstIteration) {
  for (let i = 0; i < data.length; i++) {
    if (i % 2 !== 0) data[i] = `X`;
    else {
      if (firstIteration) data[i] = `${data.at(i)}-${i}`;
    }
  }

  const newData = data.filter(item => item !== 'X');
  const isOdd = newData.length % 2 !== 0;
  if (isOdd && newData.length !== 1) newData[0] = 'X';

  if (newData.length === 1) {
    return newData[0];
  } else {
    return getWinner(newData, false);
  }
}

console.log(`submit ${getWinner(data, true)}`);
