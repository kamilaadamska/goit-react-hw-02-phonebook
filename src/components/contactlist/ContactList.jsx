export const ContactList = ({ contacts, filter }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(({ name, id, number }) => (
        <li key={id}>
          {name}: {number}
        </li>
      ))}
    </ul>
  );
};
