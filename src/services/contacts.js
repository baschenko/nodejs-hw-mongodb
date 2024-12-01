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

  if (filter.favorite) {
    query.where('isFavorite').equals(filter.favorite);
  }

  if (filter.userId) {
    query.where('userId').equals(filter.userId);
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

export const getContactById = ({ contactId, userId }) => {
  const user = ContactsCollection.findOne({
    _id: contactId,
    userId: userId,
  });
  return user;
};

export const addContact = (payload) => ContactsCollection.create(payload);

export const updateContact = async ({ _id, userId, payload, options = {} }) => {
  const data = await ContactsCollection.findOneAndUpdate(
    { _id, userId },
    payload,
    {
      ...options,
    },
  );
  return data;
};

export const deleteContact = async (filter) =>
  ContactsCollection.findOneAndDelete(filter);
