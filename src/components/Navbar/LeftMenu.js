import React, { Component } from 'react';
import { Menu } from 'antd';

class LeftMenu extends Component {
    render() {
        return (
            <React.Fragment>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <a href="">Home</a>
                </Menu.Item>
                <Menu.Item key="categories">
                    <a href="/categories/">Categories</a>
                </Menu.Item>
                <Menu.Item key="topics">
                    <a href="/categories/topics/">Topics</a>
                </Menu.Item>
            </Menu>
            </React.Fragment>
        );
    }
}

export default LeftMenu