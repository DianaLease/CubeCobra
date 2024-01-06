import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardHeader, CardBody } from 'reactstrap';

import MainLayout from 'layouts/MainLayout';
import RenderToRoot from 'utils/RenderToRoot';

function VersionPage({ version, host, loginCallback }) {
  return (
    <MainLayout loginCallback={loginCallback}>
      <Card className="my-3">
        <CardHeader>
          <h4>Deployment Details</h4>
        </CardHeader>
        <CardBody>
          <dl className="row">
            <dt className="col-3">Build Version</dt>
            <dd className="col-9">
              <p>{version}</p>
            </dd>
          </dl>
          <dl className="row">
            <dt className="col-3">Host</dt>
            <dd className="col-9">
              <p>{host}</p>
            </dd>
          </dl>
        </CardBody>
      </Card>
    </MainLayout>
  );
}

VersionPage.propTypes = {
  version: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  loginCallback: PropTypes.string,
};

VersionPage.defaultProps = {
  loginCallback: '/',
};

export default RenderToRoot(VersionPage);
