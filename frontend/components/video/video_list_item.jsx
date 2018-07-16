import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const VideoListItem = ({type, video, user}) => {
  const username = user ? user.username : '';

  return (
    <div className={`${type}-list-item`}>
      <Link className={`${type}-list-item-link`} to={`/videos/${video.id}`}>

        <img className={`${type}-thumbnail-image`} src={video.thumbnail_image_url} />
        <span className={`${type}-thumbnail-duration`}>0:00</span>
        <div className={`${type}-thumbnail-content`}>
          <div className={`${type}-list-item-title`}>{video.title}</div>
          <div className={`${type}-list-item-author`}>{username}</div>
          <div className={`${type}-list-item-views`}>{video.views} views
            <span className={`${type}-list-item-age`}> <span>&middot;</span> _ days ago</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

const msp = (state, ownProps) => {
  const video = state.entities.videos[ownProps.videoId];
  
  return {
    video,
    user: state.entities.users[video.uploader_id]
  };
};

export default connect(msp, null)(VideoListItem);
