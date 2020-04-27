import * as React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export interface INavBarProps {
}

export default class NavBar extends React.Component<INavBarProps> {
    public render () {
        return (
            <Menu size={'large'}>
                <Menu.Item
                    as={Link}
                    to={`/home`}
                    name='home'
                >
                    Log In
                </Menu.Item>

                <Menu.Item
                    as={Link}
                    to={`/signup`}
                    name='signup'
                >
                    Sign Up
                </Menu.Item>

                <Menu.Item
                    as={Link}
                    to={`/newsfeed`}
                    name='newsfeed'
                >
                    Newsfeed
                </Menu.Item>

                <Menu.Item
                    as={Link}
                    to={`/chat`}
                    name='chat'
                >
                    Chat
                </Menu.Item>

                <Menu.Item
                    as={Link}
                    to={`/profiles`}
                    name='profiles'
                >
                    Profiles
                </Menu.Item>
            </Menu>
        );
    }
}