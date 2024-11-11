export const calculatePaginationData = (count, page, perPage) => {
  const totalPage = Math.ceil(count / perPage);
  const hasPreviousPage = page > 1;
  const hasNextPage = page < totalPage;
  return {
    page,
    perPage,
    totalItems: count,
    totalPage,
    hasPreviousPage,
    hasNextPage,
  };
};
