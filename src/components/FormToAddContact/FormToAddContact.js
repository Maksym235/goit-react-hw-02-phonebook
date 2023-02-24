import React from 'react';
import { nanoid } from 'nanoid';
import { FormStyled, Input, Label, Button } from './FormToAddContact.styled';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class Form extends React.Component {
  state = {
    ...INITIAL_STATE,
  };

  onHandlerChange = evt => {
    const target = evt.target;
    this.setState({
      [target.name]: target.value,
    });
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

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };
  render() {
    return (
      <FormStyled onSubmit={this.onFormSubmmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="enter name"
            onChange={this.onHandlerChange}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="enter number"
            onChange={this.onHandlerChange}
          />
        </Label>
        <Button>Add contact</Button>
      </FormStyled>
    );
  }
}

Form.propTypes = {
  onHandlerSubmit: PropTypes.func.isRequired,
};
