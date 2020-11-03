import { CHANNEL_SELECTED } from '../actions/actions';

export default function selectedChannelReducer(state = null, action) {
  switch (action.type) {
    case CHANNEL_SELECTED: {
      return action.payload;
    }
    default:
      return state;
  }
}
