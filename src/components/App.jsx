import { Component } from 'react';
import ContactForm from './contactform/ContactForm';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = name => {
    const { contacts } = this.state;

    name.id = nanoid(3);
    contacts.push(name);
    console.log(contacts);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={name => this.addContact(name)} />
      </div>
    );
  }
}

export default App;
