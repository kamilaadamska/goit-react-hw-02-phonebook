import PropTypes from 'prop-types';

export const ContactList = ({ contacts, filter, removeContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(({ name, id, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => removeContact(id)}>
            Remove contact
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  removeContact: PropTypes.func,
};
