import React, { Fragment, useContext, useEffect } from "react";
import Spinner from '../layout/Spinner'
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(()=>{
    getContacts()
    //eslint-disable-next-line
  }, [])

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Možete dodati novi kontakt</h4>;
  }

  

  return (
    <Fragment>
      {contacts !== null && !loading ? ( filtered !== null
        ? filtered.map((contact) => (
            <ContactItem contact={contact} key={contact._id} />
          ))
        : contacts.map((contact) => (
            <ContactItem contact={contact} key={contact._id} />
          ))): <Spinner/> }
     
    </Fragment>
  );
};

export default Contacts;
