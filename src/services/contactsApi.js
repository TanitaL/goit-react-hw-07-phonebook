import axios from 'axios';

axios.defaults.baseURL = 'https://646b46417d3c1cae4ce38a8b.mockapi.io';

export const fetchContacts = async () => {
  const response = await axios.get(`/contacts`);
  return response.data;
};

export const addContact = async newContact => {
  const response = await axios.post(`/contacts`, newContact);
  return response.data;
};

export const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};