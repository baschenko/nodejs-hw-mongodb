import ContactsCollection from '../db/models/Contacts.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getContacts = async ({
  page = 1,
  perPage = 10,
  sortBy = '_id',
  sortOrder = 'asc',
  filter = {},
}) => {
  const skip = (page - 1) * perPage;

  const query = ContactsCollection.find();

  if (filter.type) {
    query.where('contactType').equals(filter.type);
  }

  if (filter.favourite) {
    query.where('isFavourite').equals(filter.favourite);
  }

  const totalItems = await ContactsCollection.find()
    .merge(query)
    .countDocuments();

  const data = await query
    .skip(skip)
    .limit(perPage)
    .sort({ [sortBy]: sortOrder });

  const paginationData = calculatePaginationData(totalItems, page, perPage);

  return {
    data,
    ...paginationData,
  };
};

export const getContactById = (id) => ContactsCollection.findById(id);

export const addContact = (payload) => ContactsCollection.create(payload);

export const updateContact = async ({ _id, payload, options = {} }) => {
  const data = await ContactsCollection.findOneAndUpdate({ _id }, payload, {
    ...options,
  });
  return data;
};

export const deleteContact = async (filter) =>
  ContactsCollection.findOneAndDelete(filter);
