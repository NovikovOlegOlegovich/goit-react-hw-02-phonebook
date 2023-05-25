import React from 'react';
import { nanoid } from 'nanoid';
import { PhonebookForm, NameInput } from './Phonebook.styled';

class Phonebook extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleInputNameChange = event => {
    const { value, name } = event.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = event => {
    event.preventDefault();
    const nameId = nanoid();
    this.props.formSubmitHendler({
      name: this.state.name,
      number: this.state.number,
      id: nameId,
    });
    this.reset();
  };

  render() {
    return (
      <PhonebookForm onSubmit={this.handleSubmit}>
        <label>
          Name
          <NameInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputNameChange}
          />
        </label>
        <label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleInputNameChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </PhonebookForm>
    );
  }
}

export default Phonebook;
