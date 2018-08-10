'use strict';

//function hydrateNotes takes one parameter called input (these are notes, an array of objects, we pass it). The purpose is to get an array of objects that removes any repeating info that we got from our many-to-to many joins. We want nice consolidated concise info.
//We create 2 constants: lookup is the object it turns into first, hydrated is our array that will end up being the array of objects we want that does not have repeating info. Id is in the lookup table, just using to look up whether or not we have touched the note with that Id yet or not.  Lookup will end up being discarded--it is a throw away object.  We only care about results in hydrated.
//For loop looks to see if the id is in the lookup object.  If it is not, create the id as a key, and the whole note, including the ID, as the value in the lookup object. The whole note itself is an object with key value pairs. Then add a new key value pair (tags: []) onto the note object. Then push the note object into the hydrated array.
//Next 4 lines looks in the note object for a tagId and tagName.  If they are there, they are pushed as an object into the array that is the value for the tags key.  This updates the lookup object.  Objects and arrays are complex data types, so they pass by reference/point to the same place in memory, so when the lookup object is updated, so is the hydrated array, so no additional push to the hydrated array is needed.
//Now that the tagId and tagName are in the tags array, we can remove them as keys from the note object as if we don't, they are redundant info.

function hydrateNotes(input) {
  const hydrated = [], lookup = {};
  for (let note of input) {
    if (!lookup[note.id]) {
      lookup[note.id] = note;
      lookup[note.id].tags = [];
      hydrated.push(lookup[note.id]);
    }

    if (note.tagId && note.tagName) {
      lookup[note.id].tags.push({
        id: note.tagId,
        name: note.tagName
      });
    }
    delete lookup[note.id].tagId;
    delete lookup[note.id].tagName;
  }
  return hydrated;
}

module.exports = hydrateNotes;