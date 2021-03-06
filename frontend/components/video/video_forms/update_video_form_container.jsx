import { connect } from 'react-redux';
import React from 'react';
import { getVideo, updateVideo, clearErrors, dispatchErrors } from '../../../actions/video_actions';
import UpdateVideoForm from './update_video_form';

const mapStateToProps = (state, ownProps) => ({
  video: state.entities.videos[ownProps.match.params.videoId],
  errors: state.errors.videos,
  formType: 'updateVideo',
  currentUserId: state.session.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: video => dispatch(updateVideo(video)),
  getVideo: () => dispatch(getVideo(ownProps.match.params.videoId, 0, 0)),
  clearErrors: () => dispatch(clearErrors()),
  dispatchErrors: errors => dispatch(dispatchErrors(errors))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateVideoForm);
