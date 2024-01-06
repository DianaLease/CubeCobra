import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContentPropType from 'proptypes/ContentPropType';

import { CardHeader, Card } from 'reactstrap';

import UserContext from 'contexts/UserContext';
import DynamicFlash from 'components/DynamicFlash';
import Video from 'components/Video';
import ButtonLink from 'components/ButtonLink';
import MainLayout from 'layouts/MainLayout';
import RenderToRoot from 'utils/RenderToRoot';

function VideoPage({ loginCallback, video }) {
  const user = useContext(UserContext);

  return (
    <MainLayout loginCallback={loginCallback}>
      <DynamicFlash />
      <Card className="mb-3">
        {user && user.id === video.owner.id && video.status !== 'published' && (
          <CardHeader>
            <h5>
              <em className="pe-3">*Draft*</em>
              <ButtonLink color="accent" outline href={`/content/video/edit/${video.id}`}>
                Edit
              </ButtonLink>
            </h5>
          </CardHeader>
        )}
        <Video video={video} />
      </Card>
    </MainLayout>
  );
}

VideoPage.propTypes = {
  loginCallback: PropTypes.string,
  video: ContentPropType.isRequired,
};

VideoPage.defaultProps = {
  loginCallback: '/',
};

export default RenderToRoot(VideoPage);
