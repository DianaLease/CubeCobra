import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Spinner } from 'reactstrap';

import DynamicFlash from 'components/DynamicFlash';
import VideoPreview from 'components/VideoPreview';
import InfiniteScroll from 'react-infinite-scroll-component';
import Banner from 'components/Banner';
import MainLayout from 'layouts/MainLayout';
import RenderToRoot from 'utils/RenderToRoot';
import { csrfFetch } from 'utils/CSRF';

const wait = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const VideosPage = ({ loginCallback, videos, lastKey }) => {
  const [items, setItems] = useState(videos);
  const [currentLastKey, setLastKey] = useState(lastKey);

  const fetchMoreData = useCallback(async () => {
    // intentionally wait to avoid too many DB queries
    await wait(2000);

    const response = await csrfFetch(`/content/getmorevideos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lastKey: currentLastKey,
      }),
    });

    if (response.ok) {
      const json = await response.json();
      console.log(json);
      if (json.success === 'true') {
        setItems([...items, ...json.videos]);
        setLastKey(json.lastKey);
      }
    }
  }, [items, setItems, currentLastKey]);

  const loader = (
    <div className="centered py-3 my-4">
      <Spinner className="position-absolute" />
    </div>
  );

  return (
    <MainLayout loginCallback={loginCallback}>
      <Banner />
      <DynamicFlash />
      <h4>videos</h4>
      <InfiniteScroll dataLength={items.length} next={fetchMoreData} hasMore={currentLastKey != null} loader={loader}>
        <Row className="mx-0">
          {items.map((item) => (
            <Col className="mb-3" xs="12" sm="6" lg="4">
              <VideoPreview video={item} />
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </MainLayout>
  );
};

VideosPage.propTypes = {
  loginCallback: PropTypes.string,
  videos: PropTypes.arrayOf({}).isRequired,
  lastKey: PropTypes.shape({}),
};

VideosPage.defaultProps = {
  loginCallback: '/',
  lastKey: null,
};

export default RenderToRoot(VideosPage);
