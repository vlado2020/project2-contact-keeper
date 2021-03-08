import React, { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid'

import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from "../types";
uuidv4()

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Leonardo da Vinci",
        email: "leo@mail.com",
        phone: "11111-1111",
        type: "slikar",
      },
      {
        id: 2,
        name: "Michelangelo Buonarotti",
        email: "mika@mail.com",
        phone: "2222221-1111",
        type: "kipar",
      },
      {
        id: 3,
        name: "Rafaelo Santi",
        email: "rafa@mail.com",
        phone: "3333333-1111",
        type: "slikar",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  /// Akcije
  ///Add contact

  const addContact = contact => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact})
  }

  //Delete Contact

  ///Set Current Contact

  //Clear Current Contact

  //Update contact

  //Filter Contact

  //Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState