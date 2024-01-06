import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardBody, FormGroup, Label, Input, Button, Col, Row, CardHeader } from 'reactstrap';

import CSRFForm from 'components/CSRFForm';
import Banner from 'components/Banner';
import DynamicFlash from 'components/DynamicFlash';
import MainLayout from 'layouts/MainLayout';
import RenderToRoot from 'utils/RenderToRoot';

function PasswordResetPage({ loginCallback, code }) {
  return (
    <MainLayout loginCallback={loginCallback}>
      <Banner />
      <DynamicFlash />
      <Card className="my-3">
        <CardHeader>
          <h5>Reset Password</h5>
        </CardHeader>
        <CardBody>
          <CSRFForm method="POST" action={`/user/lostpasswordreset/${code}`}>
            <FormGroup>
              <Row>
                <Col sm="4">
                  <Label>Email Address:</Label>
                </Col>
                <Col sm="8">
                  <Input maxLength="1000" name="email" id="email" type="text" />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col sm="4">
                  <Label>New Password:</Label>
                </Col>
                <Col sm="8">
                  <Input maxLength="1000" name="password" id="password" type="password" />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col sm="4">
                  <Label>Confirm New Password:</Label>
                </Col>
                <Col sm="8">
                  <Input maxLength="1000" name="password2" id="confirmPassword" type="password" />
                </Col>
              </Row>
            </FormGroup>
            <Button type="submit" color="accent" block outline>
              Change Password
            </Button>
          </CSRFForm>
        </CardBody>
      </Card>
    </MainLayout>
  );
}

PasswordResetPage.propTypes = {
  loginCallback: PropTypes.string,
  code: PropTypes.string.isRequired,
};

PasswordResetPage.defaultProps = {
  loginCallback: '/',
};

export default RenderToRoot(PasswordResetPage);
