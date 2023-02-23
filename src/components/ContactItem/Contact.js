import { AiFillCloseCircle } from 'react-icons/ai';
import { Item, Button } from './Contact.styled';
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
