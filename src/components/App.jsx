import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, MainTitle, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  nameInputId = () => nanoid();

  addContact = ({ name, number }) => {
    const contact = {
      id: this.nameInputId(),
      name,
      number,
    };

    this.setState(({ contacts }) => {
      const isNameExist = contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (isNameExist) {
        alert(`${name} is already in contacts`);
        return;
      }

      return {
        contacts: [contact, ...contacts],
      };
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const contacts = this.getVisibleContacts();

    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onSubmit={this.addContact} />
        <Title>Contacts</Title>
        <Filter onChange={this.changeFilter} />
        <ContactList contacts={contacts} onClick={this.deleteContacts} />
      </Container>
    );
  }
}
