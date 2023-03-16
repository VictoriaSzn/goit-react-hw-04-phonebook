import { useEffect, useState } from "react";
import ContactForm from './ContactForm/ContacForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export function App() {
  const [filter, setFilter] = useState('');
     const [contacts, setContacts] = useState([
       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
       {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
       {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
       {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
     ]) 
  
    // const [contacts, setContacts] = useState(() => {
    //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    //   if (parsedContacts) {
    //     return parsedContacts ;
    //   }
    // });

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? '';
  // });
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify( contacts));
  }, [contacts]);

   const addContacts = ({ name, number }) => {
      const includeNumber = contacts
       .map((contact) => contact.name)
       .includes(name);
    
     if (includeNumber) {
       alert(`${name} is already in contacts`);
     } else {
       const newContact = {
         id: nanoid(),
         name,
         number,
       };
      setContacts([ newContact, ...contacts]);
    }
  };
   const changeFilter = (evt) => {
    setFilter(evt.currentTarget.value);
  };

  const deleteContacts = (contactsId) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactsId));
  };
  const normaliseFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normaliseFilter),);
  return (
      <div
        style={{
          height: '100vh',
          
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={addContacts } /> 
        
        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChangeFilter={changeFilter} />
        
         {visibleContacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={deleteContacts} />
        )}
      </div>
    );
}
