import React, {Component, lazy, Suspense} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Link, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialazedApp} from "./redux/app-reducer";
import Loader from "./components/common/Loader";
import {StateType} from "./redux/redux-store";
import {Login} from "./components/Login/login";
import {Breadcrumb, Button, Layout, Menu} from 'antd';
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import {AppHeader} from './components/Header/Header';

const { SubMenu } = Menu;
const {Content, Footer, Sider } = Layout;

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const UsersPage = lazy(() => import('./components/Users/UsersContainer'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = { initialazedApp: ()=> void }

class App extends Component<MapPropsType & DispatchPropsType> {
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert("Some error occured")
    }

    componentDidMount() {
        this.props.initialazedApp();
        // window.addEventListener("unhandlerejjection", this.catchAllUnhandledErrors)

    }
    componentWillUnmount(): void {
        // window.removeEventListener("unhandlerejjection", this.catchAllUnhandledErrors )
    }

    render() {
        if (!this.props.initialized) {
            return <Loader/>
        }
        return (
            <Layout>
                <AppHeader/>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['2']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined />} title="My Profile">
                                    <Menu.Item key="1">
                                        <Link to="/profile">Profile</Link>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <Link to="/dialogs">Messages</Link>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Developers">
                                    <Menu.Item key="5">
                                        <Link to="/developers">Users</Link>

                                    </Menu.Item>
                                    <Menu.Item key="6">
                                        <Link to="/Music">Music</Link>
                                    </Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Suspense fallback={<Loader/>}>
                                <div className="app-wrapper-content">
                                    <Switch>
                                        <Route exact path={'/'} render={() => <Redirect to={'/profile'}/>}/>
                                        <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                                        <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                                        <Route path={'/developers'} render={() => <UsersPage pageTitle={"Developers page"}/>}/>
                                        <Route path={'/login'} render={() => <Login/>}/>
                                        <Route path={'*'} render={() => <div>404 NOT FOUNDED
                                            <Button>Ok</Button>
                                        </div>}/>
                                    </Switch>

                                </div>
                            </Suspense>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Social Network</Footer>
            </Layout>
        );
    }
}

let mapStateToProps = (state: StateType) => {
    return {
        initialized: state.isInitialize.initialized
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initialazedApp}))(App);