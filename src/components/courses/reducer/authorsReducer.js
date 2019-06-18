export default function authorssReducer(state = [], action) {
  switch (action.type) {
    case "GET_ALL_AUTHORS": {
      return [...state, ...action.authors];
    }
    default: {
      return state;
    }
  }
}
