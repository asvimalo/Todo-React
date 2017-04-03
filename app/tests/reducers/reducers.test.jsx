const expect = require('expect');
const df = require('deep-freeze-strict');
const reducers = require('reducers');
const moment = require('moment');


describe('Reducers', () => {

  describe('searchTextReducer', () => {
      it('should set search text', () => {
        var action = {
          type: 'SET_SEARCH_TEXT',
          searchText: 'Cat'
        };
        var res = reducers.searchTextReducer(df(''), df(action));

        expect(res).toEqual(action.searchText);
      });
  });
  describe('showCompletedReducer', () => {
      it('should toggle showCompleted', () => {
        var action = {
          type: 'TOGGLE_SHOW_COMPLETED',
        };
        var res = reducers.showCompletedReducer(df(false), df(action));

        expect(res).toEqual(true);
      });

  });
  describe('todosReducer', () => {
      it('should add new todo', () => {
        var action = {
          type: 'ADD_TODO',
          text: 'Study redux-react'
        };
        var res = reducers.todosReducer(df([]), df(action));

        expect(res.length).toEqual(1);
        expect(res[0].text).toEqual(action.text);
      });

    it('should toggle todo', () => {
        // define todos array with realistic todo item
        var todos = [
          {
            id: 1,
            text: 'Make my coffe',
            completed: false,
            createdAt: moment().unix(),
            completedAt: undefined
          },
          {
            id: 2,
            text: 'Eating meal',
            completed: false,
            createdAt: moment().unix(),
            completedAt: undefined
          }
        ];
        // generate action
        var action = {
          type: 'TOGGLE_TODO',
          id: 2
        };
        // call reducer and assert completed flipped
        var res = reducers.todosReducer(df(todos), df(action));
        expect(res[1].completed).toEqual(true);
        expect(res[1].completedAt).toBeA('number');
    })


  });
});
