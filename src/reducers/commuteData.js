import initialState from '../data/commute_to';

export default function commuteData(state = initialState, action) {
  switch(action.type) {

  case 'IMPORT_DATA':
    return action.commuteData;

  case 'DELETE_ROW':
    return action.commuteData;

  default:
    return state;

  }
}
