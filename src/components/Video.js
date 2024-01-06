import React from 'react';
import ContentPropType from 'proptypes/ContentPropType';

import Markdown from 'components/Markdown';
import CommentsSection from 'components/CommentsSection';
import Username from 'components/Username';
import TimeAgo from 'react-timeago';
import ReactPlayer from 'react-player';

import { CardBody, CardHeader } from 'reactstrap';

function Video({ video }) {
  return (
    <>
      <CardHeader>
        <h1>{video.title}</h1>
        <h6>
          By <Username user={video.owner} />
          {' | '}
          <TimeAgo date={video.date} />
        </h6>
      </CardHeader>
      <CardBody>
        <div className="player-wrapper">
          <ReactPlayer className="react-player" url={video.url} width="100%" height="100%" />
        </div>
      </CardBody>
      <CardBody>
        <Markdown markdown={video.body} />
      </CardBody>
      <div className="border-top">
        <CommentsSection parentType="video" parent={video.id} collapse={false} />
      </div>
    </>
  );
}
Video.propTypes = {
  video: ContentPropType.isRequired,
};

export default Video;
