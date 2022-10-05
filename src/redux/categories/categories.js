const CHECK_STATUS = 'CHECK_STATUS';

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const categories = [];

const categoriesReducer = (state = categories, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'UNDER CONSTRUCTION';

    default:
      return state;
  }
};

export default categoriesReducer;
