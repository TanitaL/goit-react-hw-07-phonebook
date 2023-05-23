import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid';
import { getContactsItems } from "redux/slice";
import { addContact } from "../redux/operations"


export const useAddContact = () => {
  const dispatch = useDispatch();
  const contactsItems = useSelector(getContactsItems);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactsName = contactsItems.map(contact => contact.name);

  const handleChangeInput = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    const filterName = contactsName.some(
      contactName => contactName.toLowerCase() === name.toLowerCase()
    );

    if (filterName) {
      return alert(`${name} is already in contacts`);
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return { name, number, formSubmitHandler, handleChangeInput };
};

