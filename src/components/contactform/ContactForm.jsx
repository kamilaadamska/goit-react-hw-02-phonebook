const { Component } = require('react');

class ContactForm extends Component {
  state = {
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const addContactForm = e.currentTarget;
    const name = addContactForm.elements.name.value;

    this.setState({ name: name });
    this.props.onSubmit(name);
    addContactForm.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
