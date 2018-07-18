import {
  RECEIVE_VIDEO,
  RECEIVE_VIDEOS,
  REMOVE_VIDEO
} from '../actions/video_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { merge } from 'lodash';

const videosReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_VIDEO:
    case RECEIVE_COMMENT:
    case REMOVE_COMMENT:
      const newState = merge({}, state);
      const newerState = merge(newState, {[action.video.id]: action.video})
      // debugger
        newerState[action.video.id].comment_ids = action.video.comment_ids.slice();
      return newerState;
    case RECEIVE_VIDEOS:
      let otherNewState = merge({}, state, action.videos);
      return otherNewState;
    case REMOVE_VIDEO:
      const stateDup = merge({}, state);
      delete stateDup[action.id];
      return stateDup
    default:
      return state;

  }
};

export default videosReducer;
