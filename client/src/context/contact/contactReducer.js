import {
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    FILTER_CONTACT,
    CLEAR_FILTER,
  } from "../types";

  export default (state, action) => {
      switch(action.type){
          case ADD_CONTACT:
              return {
                  ...state,
                  //ne možemo ih samo promijeniti jer je state imutable, zato dodajemo na kopiju
                  contacts: [...state.contacts, action.payload]
              }
          default:
              return state;
      }
  }