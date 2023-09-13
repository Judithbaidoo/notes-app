const model = require('./notesModel');



describe('test notes', () => {
    test('test note function', () => {
        expect(model.getNotes()).toStrictEqual([]);
    })
})

describe('add note', () => {
    test('get note after add function', () => {
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        expect(model.getNotes()).toStrictEqual(['Buy milk', 'Go to the gym'])
    })
})

describe('reset function', () => {
    test('reset array', () => {
        model.reset()
        expect(model.getNotes()).toStrictEqual([])
    })
})