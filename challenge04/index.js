let numberFives = 0;
let totalNumbersValid = 0;
let passwords = [];

for (let i = 11098; i <= 59999; i++) {
  const pwd = String(i);
  passwords.push(pwd);
}

passwords = passwords.filter(password => {
  numberFives = 0;
  for (const number of password) {
    if (number === '5') {
      numberFives++;
    }
  }

  totalNumbersValid = 0;

  if (numberFives >= 2) {
    for (let i = 0; i < password.length; i++) {
      if (Number(password[i + 1]) >= Number(password[i])) totalNumbersValid++;
    }
  }
  return totalNumbersValid === 4;
});

console.log(`submit ${passwords.length}-${passwords.at(55)}`);
