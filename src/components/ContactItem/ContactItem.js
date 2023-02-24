import { AiFillCloseCircle } from 'react-icons/ai';
import { Item, Button } from './ContactItem.styled';
import PropTypes from 'prop-types';
export function Contact({ contact: { id, name, number }, onDeleteContact }) {
  return (
    <Item key={id}>
      {name}: {number}
      <Button type="button" onClick={() => onDeleteContact(id)}>
        <AiFillCloseCircle />
      </Button>
    </Item>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};
