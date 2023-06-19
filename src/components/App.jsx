import { Component } from 'react';
import ContactForm from './contactform/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './contactlist/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = addedName => {
    const contact = {
      id: nanoid(3),
      name: addedName,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={name => this.addContact(name)} />
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
