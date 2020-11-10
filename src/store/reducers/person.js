import * as actionTypes from "../actions";

const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(), // not really unique
        name: action.person.name,
        age: action.person.age,
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson),
      };
    case actionTypes.REMOVE_PERSON:
      const updatedArray = state.persons.filter(
        (person) => person.id !== action.personId
      );
      return { ...state, persons: updatedArray };
  }
  return state;
};

export default reducer;
