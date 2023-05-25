import React, { Component } from 'react';
import { Wrapper } from './App.styled';
import Section from '../Section';
import Phonebook from '../Phonebook';
import Contacts from '../Contacts';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  formSubmitHendler = data => {
    this.setState(prevSet => ({
      contacts: [...prevSet.contacts, data],
    }));
  };
  render() {
    return (
      <Wrapper>
        <Section title={'Phonebook'}>
          <Phonebook formSubmitHendler={this.formSubmitHendler} />
        </Section>
        <Section title={'Contacts'}>
          <Contacts contacts={this.state.contacts} />
        </Section>
      </Wrapper>
    );
  }
}
