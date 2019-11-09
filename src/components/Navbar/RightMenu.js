import React, { Component } from 'react';
import { Menu } from 'antd';

class RightMenu extends Component {
    render() {
        return (
            <React.Fragment>
            <Menu mode="horizontal">
                <Menu.Item key="mail">
                    <a href="/login/">Signin</a>
                </Menu.Item>
                <Menu.Item key="app">
                    <a href="/signup/">Signup</a>
                </Menu.Item>
            </Menu>
            </React.Fragment>
        );
    }
}

export default RightMenu