import { Component } from 'react';
import ContactForm from './contactform/ContactForm';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={name => {
            contacts.push(name);
            console.log(contacts);
          }}
        />
      </div>
    );
  }
}

export default App;
