import { typeList } from '../constants/contacts.js';

const boolList = ['true', 'false'];

const parseString = (query, list) => {
  const isString = typeof query === 'string';
  if (!isString) return;

  const isQuery = (query) => list.includes(query);

  if (isQuery(query)) return query;
};

export const parseContactFilterParams = ({ type, favorite }) => {
  const parsedContactType = parseString(type, typeList);
  const parsedIsFavorite = parseString(favorite, boolList);

  return {
    type: parsedContactType,
    favorite: parsedIsFavorite,
  };
};
