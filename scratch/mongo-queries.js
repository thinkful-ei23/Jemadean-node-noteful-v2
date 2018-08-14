'use strict';

// Write a MongoDB query to display all the documents in the collection notes.
// db.notes.find();

// Write a MongoDB query to display all the documents in the collection notes and format the results to be 'pretty'.
// db.notes.find().pretty();

// Write a MongoDB query to display the fields title and content for all the documents in the collection notes.
// db.notes.find({}, {"title": 1, "content": 1}).pretty();

// Write a MongoDB query to display the fields title and content but exclude the field _id for all the documents in the collection notes.
// db.notes.find({}, {"title": 1, "content": 1, "_id": 0}).pretty();

// Write a MongoDB query to display only the title field for all the documents in the collection notes and sort the results by _id in descending order.
// db.notes.find({}, {"title": 1}).sort({_id: -1});

// Write a MongoDB query to display all the documents from the collection notes which contain the title '5 life lessons learned from cats'.
// db.notes.find({"title": "5 life lessons learned from cats"}).pretty();

// Write a MongoDB query to display the first 5 documents from the collection notes.
// db.notes.find().sort({"_id": 1}).limit(5).pretty();

// Write a MongoDB query to display the next 5 documents from the collection notes after skipping the first 5.
// db.notes.find().sort({"_id": 1}).skip(5).limit(5).pretty();

// Write a MongoDB query to display the total number of documents in the collection notes.
// db.notes.count();

// Write a MongoDB query to display the documents from the collection notes which have an _id that is greater than "000000000000000000000007".
// db.notes.find({"_id": {"$gt": "000000000000000000000007"}});

// Write a MongoDB query to display the documents from the collection notes which have an _id which is greater than or equal to "000000000000000000000009" but less than or equal to "000000000000000000000017".
// db.notes.find({"_id": {"$gte": "000000000000000000000009",
//   "$lte": "000000000000000000000017"}});

// Write a MongoDB query to display the documents from the collection notes which have an _id which is less than or equal to "000000000000000000000007".
// db.notes.find({"_id": {"$lte": "000000000000000000000007"}});

// Write a MongoDB query to display only one document from the collection notes.
// db.notes.findOne();

// Write a MongoDB query to display only the title of one document from the collection notes (_id can be included).
// db.notes.findOne({}, {"title": 1});

// Write a MongoDB query to display only the title of one document from the collection notes (_id excluded).
// db.notes.findOne({}, {"title": 1, "_id": 0});

// Write a MongoDB query to insert one document into the collection notes. The title and content fields can be whatever you like.
// db.notes.insert({
//   "title": "Why dogs are better than cats",
//   "content": "Every reason"
// });
// db.notes.find({"content": "Every reason"});

// Write a MongoDB query to insert two note documents into the collection notes. The title and content fields can be whatever you like.
// db.notes.insertMany([
//   {
//     "title": "Why dogs are even better than cats",
//     "content": "Every other reason"
//   },
//   {
//     "title": "Why dogs are the best",
//     "content": "All the reasons"
//   }
// ]);

// Write a MongoDB query to modify the title and content fields of the document from the collection notes with _id "000000000000000000000003". Change the title and content to be whatever you like.
// db.notes.update({
//   "_id": "000000000000000000000003"}, {
//   "title": "I've been updated",
//   "content": "I used to be something else"
// }
// );
// db.notes.find({"_id": "000000000000000000000003"});

// Write a MongoDB query to modify only the title field of the document from the collection notes with _id "000000000000000000000007". The content field should remain unchanged.
// db.notes.update({
//   "_id": "000000000000000000000007"}, {
//   "$set": {"title": "My title was updated" 
//   }
// }
// );
// db.notes.find({"_id": "000000000000000000000007"});

// Write a MongoDB query to modify the title and content fields of all the documents in the collection notes that have an _id field greater than "000000000000000000000014".
// db.notes.updateMany({"_id": {"$gt": "000000000000000000000014"}}, {"$set": {
//   "title": "My Id is over 14 and I've been updated",
//   "content": "My Id is over 14 and I used to be something else"
// }}
// );
// db.notes.find({"_id": {"$gt": "000000000000000000000014"}});

// Write a MongoDB query to remove only the title field from the document in the collection notes with _id "000000000000000000000008".
// db.notes.update({"_id": "000000000000000000000008"}, {"$unset": {"title": 1}});
// db.notes.find({"_id": "000000000000000000000008"});

// Write a MongoDB query to remove the content fields from all documents in the collection notes with _id less than or equal to "000000000000000000000006".
// db.notes.update({"_id": {"$lte":"000000000000000000000006"}}, {"$unset": {"content": 1}}, {multi: true});
// db.notes.find({"_id":  {"$lte":"000000000000000000000006"}});

// Write a MongoDB query to remove the title fields from all documents in the collection notes with _id less than or equal to "000000000000000000000003".
// db.notes.update({"_id": {"$lte":"000000000000000000000003"}}, {"$unset": {"title": 1}}, {multi: true});
// db.notes.find({"_id":  {"$lte":"000000000000000000000003"}});

// Write a MongoDB query to remove the document from the collection notes that has an _id "000000000000000000000017".
// db.notes.deleteOne({"_id": "000000000000000000000017"});
// db.notes.find({}, {"_id": 1}).sort({"_id": 1});

// Write a MongoDB query to remove the documents from the collection notes that have an _id which is not less than "000000000000000000000018".
// db.notes.deleteMany({"_id": {"$not": {"$lt":"000000000000000000000018"}}});
// db.notes.find({}, {"_id": 1}).sort({"_id": 1});

// Write a MongoDB query to remove the documents from the collection notes that have an _id which is greater than or equal to "000000000000000000000013" and contain the string 'dogs' in the title.
// db.notes.createIndex( {
//   title: "text"
// });
// db.notes.deleteMany({"_id": {"$gte":"000000000000000000000013"}, $text: { $search: "dogs"}});
// db.notes.find({}, {"_id": 1}).sort({"_id": 1});

// Write a MongoDB query to display all the documents from the collection notes which do not have a title field.
// db.notes.find({"title": null});

// Write a MongoDB query to remove all the documents from the collection notes which contain the string 'cat' in the title but not the string 'the'.
// db.notes.deleteMany({$and: [{"title": {$regex: /cat/i}}, {"title": {$not: /the/i}}]
// });
// db.notes.find({"title": {$regex: /cat/}});

// Write a MongoDB query to display all the documents from the collection notes that have a title field which does not contain the string 'dogs' and does contain a title field.
db.notes.find({$and: [
  {"title": {$exists: true}},
  {"title": {$not: /dogs/i}}
]}
).pretty();