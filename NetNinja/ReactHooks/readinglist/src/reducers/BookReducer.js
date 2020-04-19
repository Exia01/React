import { v1 as uuidv1 } from 'uuid';
// Similar to redux
export const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      // returning the new arr of books
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: uuidv1(),
        },
      ];
    case 'REMOVE_BOOK':
      const id = action.id;
      console.log(id);

      return state.filter((book) => {
        return book.id !== id;
      });
    default:
      return state;
  }
};
