const db = require('./index.js');

const items = [
  {
    name: 'Acoustic Guitar',
    price: 300,
    quantity: 12,
  },
  {
    name: 'pizza',
    price: 500,
    quantity: 5,
  },
  {
    name: 'lambo',
    price: 4,
    quantity: 4,
  },

];

const seeder = () => {
  items.forEach((item) => {
    const queryStr = `insert into inventory (name, price, quantity) values
    ("${item.name}", "${item.price}", "${item.quantity}")`

    db.query(queryStr, (err, result) => {
      if (err) {
        console.log('failed to seed');
      } else {
        console.log(`success to seed ${item.name} into inventory`)
      }
    })
  });

  db.end();
};

seeder();