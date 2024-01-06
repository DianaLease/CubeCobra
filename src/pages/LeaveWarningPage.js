import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardHeader, CardBody, Button, CardFooter } from 'reactstrap';
import DynamicFlash from 'components/DynamicFlash';
import MainLayout from 'layouts/MainLayout';
import ButtonLink from 'components/ButtonLink';
import RenderToRoot from 'utils/RenderToRoot';

const back = () => (window.history.length > 1 ? window.history.back() : window.close());

function LeaveWarningPage({ url, loginCallback }) {
  return (
    <MainLayout loginCallback={loginCallback}>
      <DynamicFlash />
      <Card className="my-3">
        <CardHeader>
          <h4>You are about to leave CubeCobra</h4>
        </CardHeader>
        <CardBody>
          <p>
            This link leads to: <code>{url}</code>
          </p>
          <p>Are you sure you want to proceed?</p>
        </CardBody>
        <CardFooter>
          <ButtonLink href={url} color="unsafe">
            Yes, continue
          </ButtonLink>
          <Button className="ms-2" color="secondary" onClick={back}>
            Go back
          </Button>
        </CardFooter>
      </Card>
    </MainLayout>
  );
}

LeaveWarningPage.propTypes = {
  url: PropTypes.string.isRequired,
  loginCallback: PropTypes.string,
};

LeaveWarningPage.defaultProps = {
  loginCallback: '/',
};

export default RenderToRoot(LeaveWarningPage);
