import { Contact } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
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
