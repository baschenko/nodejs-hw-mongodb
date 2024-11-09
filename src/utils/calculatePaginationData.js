export const calculatePaginationData = ({ totalItems, page, perPage }) => {
  const totalPage = Math.ceil(totalItems / perPage);
  const hasPreviousPage = page > 1;
  const hasNextPage = page < totalPage;
  return {
    page,
    perPage,
    totalItems,
    totalPage,
    hasPreviousPage,
    hasNextPage,
  };
};
