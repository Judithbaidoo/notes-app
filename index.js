const model = require('./notesModel');

console.log(model.getNotes()); // should return []

model.addNote('Buy milk');
model.addNote('Go to the gym');

console.log(model.getNotes()); // should now return ['Buy milk', 'Go to the gym']

model.reset();

console.log(model.getNotes()); // should now return []