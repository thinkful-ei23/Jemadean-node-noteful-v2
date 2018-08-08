'use strict';

const knex = require('../knex');

// let searchTerm = 'gaga';
// knex
//   .select('notes.id', 'title', 'content')
//   .from('notes')
//   .modify(queryBuilder => {
//     if (searchTerm) {
//       queryBuilder.where('title', 'like', `%${searchTerm}%`);
//     }
//   })
//   .orderBy('notes.id')
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });

// let id = 3;
// knex
//   .select('notes.id', 'title', 'content')
//   .from('notes')
//   .modify(queryBuilder => {
//     if (id) {
//       queryBuilder.where('notes.id', `${id}`);
//     }
//   })
//   .then(results => {
//     console.log(JSON.stringify(results[0], null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });

let id = 3;
// let updatedObject = {
//   title: 'New Title',
//   content: `I've been updated!`
// };
knex
  .select('notes.id', 'title', 'content')
  .from('notes')
  .modify(queryBuilder => {
    if (id) {
      queryBuilder.where('notes.id', `${id}`);
    }
  })     
  .then(results => {
    console.log(JSON.stringify(results[0], null, 2));
  })
  .catch(err => {
    console.error(err);
  });