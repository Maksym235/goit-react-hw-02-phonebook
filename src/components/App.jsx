import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { AiFillCloseCircle } from 'react-icons/ai';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  onHandlerChange = evt => {
    const { value } = evt.currentTarget;
    this.setState({
      filter: value,
    });
  };

  onHandlerSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
      form.reset();
      return;
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));

    form.reset();
  };

  findByName = () => {
    return this.state.contacts.filter(contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );
  };

  deleteContact = cntId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== cntId),
      };
    });
  };

  render() {
    const filtredContacts = this.findByName();
    return (
      <div>
        <div>
          <h2>PHONEBOOK</h2>
          <form onSubmit={this.onHandlerSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                placeholder="enter name"
              />
            </label>
            <label>
              Number
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                placeholder="enter number"
              />
            </label>
            <button>Add contact</button>
          </form>
          <h3>Contacts</h3>
          <label>
            Find contact by name
            <input type="text" name="find" onChange={this.onHandlerChange} />
          </label>
          <ul>
            {filtredContacts.map(contact => {
              return (
                <li key={contact.id}>
                  {contact.name}: {contact.number}
                  <button
                    type="button"
                    onClick={() => this.deleteContact(contact.id)}
                  >
                    <AiFillCloseCircle />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
