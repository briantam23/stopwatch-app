import { expect } from 'chai';
import { createStore } from 'redux';
import { _createTodo } from '../src/store/actions/todos';
import { CREATE_TODO } from '../src/store/constants';
import todosReducer from '../src/store/reducers/todos';


describe('The `Todo` Redux store', () => {

    const todo = {
        taskName: 'Muay Thai',
        assignee: 'Brian'
    }

    describe('action creator', () => {

        it('returns properly formatted action', () => {

            expect(_createTodo(todo)).to.be.deep.equal({
                type: CREATE_TODO,
                todos: todo
            })
        })
    })
})