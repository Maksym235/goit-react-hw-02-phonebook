import { Contact } from 'components/ContactItem/Contact';
import { List } from './contactList.styled';

export default function ContactList({ data, onDeleteContact }) {
  return (
    <List>
      {data.map(contact => {
        return (
          <Contact
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </List>
  );
}
