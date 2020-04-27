import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';

export default class NavMenu extends React.Component {
    render () {
    return (
  <Menu>
    <Container>
      <Menu.Item as="a" header>
        <Image
          size="small"
          src=""
        />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as="a" name="login">
          Login
        </Menu.Item>
        <Menu.Item as="a" name="register">
          Register
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);
}
};