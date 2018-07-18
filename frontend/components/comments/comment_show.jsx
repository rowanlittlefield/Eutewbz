import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CommentList from './comment_list';
import CreateCommentFormContainer from './create_comment_form_container'

class CommentShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getComments(this.props.currentVideoId, null);
  }

  render() {
    const commentIds = this.props.commentIds

    return (
      <div>
        <div className="comment-show-header">
          <h2 className="comment-show-number">{commentIds.length} Comments</h2>
          <CreateCommentFormContainer type={'tl'} parentCommentId={null} />
        </div>

        <CommentList
           commentIds={this.props.commentIds}
           parentCommentId={null}
           type={'tl'}/>
      </div>
    );
  }
}

export default withRouter(CommentShow);
