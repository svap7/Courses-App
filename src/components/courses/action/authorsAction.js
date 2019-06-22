export const getAllAuthors = authors => {
  return {
    type: "GET_ALL_AUTHORS",
    authors
  };
};
