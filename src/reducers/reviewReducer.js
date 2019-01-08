export const reviewReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      return [action.review, ...state]
    default:
      return state;
  }
};