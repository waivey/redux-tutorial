import { VISIBILITY_FILTERS } from '../constants';


export const getToDosState = store => store.todos;

export const getToDoList = store => getToDosState(store) ? getToDosState(store).allIds : [];

export const getToDoById = (store, id) => getToDosState(store) ? {...getToDosState(store).byIds[id], id} : {};

export const getToDos = store => {
    getToDoList(store).map(id => getToDoById(store, id))
}

export const getToDosByVisibilityFilter = (store, visibilityFilter) => {
    const allToDos = getToDos(store);
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allToDos.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allToDos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
            default: return allToDos
    }

}