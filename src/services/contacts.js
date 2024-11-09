import ContactsCollection from '../db/models/Contacts.js';

export const getContacts = () => ContactsCollection.find();

export const getContactById = (id) => ContactsCollection.findById(id);

export const addContact = (payload) => ContactsCollection.create(payload);

export const updateContact = async ({ _id, payload, options = {} }) => {
  const data = await ContactsCollection.findOneAndUpdate({ _id }, payload, {
    ...options,
    // new: true,
    // runValidators: true,
  });
  return data;
};

export const deleteContact = async (filter) =>
  ContactsCollection.findOneAndDelete(filter);
