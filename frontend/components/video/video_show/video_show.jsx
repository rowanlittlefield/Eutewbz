import React from 'react';
import { withRouter } from 'react-router-dom';
import VideoStreamer from './video_streamer_container';
import VideoShowFooter from './video_show_footer';
import VideoList from '../video_list';
import CommentShowContainer from '../../comments/comment_show/comment_show_container'

class VideoShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentVideoId: this.props.match.params.videoId
    };
  }

  componentWillMount() {
    this.props.getVideo(this.props.match.params.videoId, 10, 0);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.videoId &&
      nextProps.match.params.videoId != this.state.currentVideoId) {
      this.setState(
        { currentVideoId: nextProps.match.params.videoId },
      );
      this.props.getVideo(nextProps.match.params.videoId, 10, 0);

    }
    if (!nextProps.video) {
      nextProps.history.push('/');
    }
  }

  render() {
    if(!this.props.video) return null;

    return(
      <div className="video-show">
        <div className="video-show-left-col">
          <VideoStreamer />
          <VideoShowFooter video={this.props.video} user={this.props.user} />
          <CommentShowContainer />
        </div>
        <div className="video-show-right-col">
          <VideoList header="Up next" type="show"
            videoIds={this.props.videoIds}
            users={this.props.users} />
        </div>
      </div>
    );
  }
}

export default withRouter(VideoShow);
