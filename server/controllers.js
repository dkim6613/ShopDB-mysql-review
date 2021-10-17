// TODO: create controller functions
const db = require('../database/index.js');

const controller = {

  getAll: (req, res) => {
    const queryStr = `select * from inventory`;
    db.query(queryStr, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    })
  },

  post: (req, res) => {
    let {name, price, quantity} = req.body;
    const queryStr = `insert into inventory (name, price, quantity) values
    ("${name}", "${price}", "${quantity}")`;

    db.query(queryStr, (err, result) => {
      if (err) {
        res.status(404).send(err);
      } else {
        //for post no need to send result. just create. for get send back result
        //as a thumbs up
        res.status(200).send('inserted into table successfully');
      }
    })
  },

  getOne: (req, res) => {
    let {id} = req.params;
    const querystr = `select * from inventory where id = ${id}`;

    db.query(queryStr, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    })
  }


  updateOne: (req, res) => {
    let {id} = req.params;
    let {newPrice} = req.body;

    const queryStr = `update inventory set price = ${newPrice}
    where id = ${id}`;

    db.query(queryStr, (err, results) => {
      if (err) {
        res.status(404).send(err)
      } else {
        //for put no need to send result. just update. for get send back result
        //as a thumbs up
        res.status(200).send(`successfully updated item id: ${id}`)
      }
    })

  }

  deleteOne: (req, res) => {
    let {id} = req.params;
    const queryStr = `delete from inventory where id = ${id}`;

    db.query(queryStr, (err, results) => {
      if (err) {
        res.status(404).send(err)
      } else {
        res.status(200).send(`${id} removed from inventory`)
      }
    })

  }




};
module.exports = controller;