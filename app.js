const fs = require('fs');

const maleNames = ['Jarosław', 'Dominiki', 'Nikodem', 'Tomasz', 'Adam'];
const womenNames = ['Lucyna', 'Anna', 'Weronika', 'Zuzanna', 'Renata'];
const surnames = ['Krawczyk', 'Adamczyk', 'Miodek', 'Baranek', 'Nowak'];
const gender = ['male','female']
const emailProvider = ['gmail', 'icloud', 'tutanota', 'yahoo'];

const choise = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

const people = [];

for(let x=0; x < 20; x++) {

  let phone = '05'

  for(let number = 0; number < 8; number++) {
    phone = phone + Math.floor(Math.random() * 10);
  }

  let sex = choise(gender)
  if(sex === 'female') {
    let name = choise(womenNames);
    let surname = choise(surnames);
    people.push({
      name: name,
      surname: surname,
      age: Math.floor((Math.random() * (78 - 18 + 1)) + 18),
      gender: 'female',
      email: `${name}.${surname}@${choise(emailProvider)}.com`,
      phoneNumber: phone
    });
  } else {
      let name = choise(maleNames);
      let surname = choise(surnames);
      people.push({
      name: name,
      surname: surname,
      age: Math.floor((Math.random() * (78 - 18 + 1)) + 18),
      gender: 'male',
      email: `${name}.${surname}@${choise(emailProvider)}.com`,
      phoneNumber: phone
    });
  };
};

const data = JSON.stringify(people, null, 2);

fs.writeFile('people.json', data, (err) => {
  if (err) {
    console.log('Something went wrong');
    throw err;
  }
  console.log('File has been successfully generated!');
});

