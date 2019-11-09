import React, { Component } from 'react';
import { Menu, Drawer, Button } from 'antd';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import DrawerToggleButton from './DrawerToggleButton'

class Navbar extends Component {

    state = {
        current: 'mail',
        visible: false
    };
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <nav>
                <div className="logo">
                    <a href="">Mohan Kandhaiya</a>
                </div>
                <div className="menuCon">
                    <div className="leftMenu">
                        <LeftMenu />
                    </div>
                    <div className="rightMenu">
                        <RightMenu />
                    </div>
                    <div className="toolbar__toggle-button">
                        <button className="toggle-button">
                            <div className="toggle-button__line" />
                            <div className="toggle-button__line" />
                            <div className="toggle-button__line" />
                        </button>
                    </div>
                    <Drawer
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                        <Menu mode="vertical">
                            <Menu.Item key="home">
                                <a href="">Home</a>
                            </Menu.Item>
                            <Menu.Item key="categories">
                                <a href="/categories/">Categories</a>
                            </Menu.Item>
                            <Menu.Item key="topics">
                                <a href="/categories/topics/">Topics</a>
                            </Menu.Item>
                            <Menu.Item key="mail">
                                <a href="/login/">Signin</a>
                            </Menu.Item>
                            <Menu.Item key="app">
                                <a href="/signup/">Signup</a>
                            </Menu.Item>
                        </Menu>
                    </Drawer>
                </div>
            </nav>
        );
    }
}

export default Navbar;