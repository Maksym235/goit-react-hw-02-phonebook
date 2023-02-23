import React from 'react';
import { nanoid } from 'nanoid';
import { FormStyled, Input, Label, Button } from './Form.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class Form extends React.Component {
  state = {
    ...INITIAL_STATE,
  };

  onFormSubmmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    this.setState({
      name,
      number,
    });
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.props.onHandlerSubmit(newContact);
    form.reset();
  };
  render() {
    return (
      <FormStyled onSubmit={this.onFormSubmmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="enter name"
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="enter number"
          />
        </Label>
        <Button>Add contact</Button>
      </FormStyled>
    );
  }
}
