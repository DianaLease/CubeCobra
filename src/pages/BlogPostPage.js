import React from 'react';
import PropTypes from 'prop-types';

import BlogPost from 'components/BlogPost';
import Banner from 'components/Banner';
import DynamicFlash from 'components/DynamicFlash';
import MainLayout from 'layouts/MainLayout';
import RenderToRoot from 'utils/RenderToRoot';
import BlogPostPropType from 'proptypes/BlogPostPropType';

function BlogPostPage({ post, loginCallback }) {
  return (
    <MainLayout loginCallback={loginCallback}>
      <Banner />
      <DynamicFlash />
      <BlogPost key={post.id} post={post} noScroll />
    </MainLayout>
  );
}

BlogPostPage.propTypes = {
  post: BlogPostPropType.isRequired,
  loginCallback: PropTypes.string,
};

BlogPostPage.defaultProps = {
  loginCallback: '/',
};

export default RenderToRoot(BlogPostPage);
