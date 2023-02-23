import { Contact } from 'components/ContactItem/Contact';
import { List } from './contactList.styled';
import PropTypes from 'prop-types';

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

ContactList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
