import { FETCH_MESSAGES, MESSAGE_POSTED, CHANNEL_SELECTED } from '../actions/actions';

export default function messagesReducer(state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES: {
      return action.payload.messages;
    }
    case MESSAGE_POSTED: {
      const copiedState = state.sliced(0);
      copiedState.push(action.payload);
      return copiedState;
    }
    case CHANNEL_SELECTED: {
      return []; // channel changed -> clearing the view
    }
    default:
      return state;
  }
}
