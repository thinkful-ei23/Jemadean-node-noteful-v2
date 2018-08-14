'use strict';

const express = require('express');
const knex = require('../knex');

const router = express.Router();

//Get All folders
router.get('/', (req, res, next) => {
  knex.select('id', 'name')
    .from('folders')
    .then(results => {
      res.json(results);
    })
    .catch(err => next(err));
});

//Get Folder by id
router.get('/:id', (req, res, next) => {
  knex.select('id', 'name')
    .from('folders')
    .where('id', req.params.id)
    .then(results => {
      res.json(results);
    })
    .catch(err => next(err));
});



//Update Folder



//Create a Folder accepts an object with a name and inserts it in the DB. Returns the new item along the new id.



//Delete Folder By Id accepts an ID and deletes the folder from the DB and then returns a 204 status.


module.exports = router;