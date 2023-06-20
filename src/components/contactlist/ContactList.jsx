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
