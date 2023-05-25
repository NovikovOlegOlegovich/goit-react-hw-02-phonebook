export default function Contacts({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} : {contact.number}
        </li>
      ))}
    </ul>
  );
}
