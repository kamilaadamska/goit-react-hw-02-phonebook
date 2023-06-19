import { Component } from 'react';
import ContactForm from './contactform/ContactForm';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
    );
  }
}

export default App;
