import React from "react";
import {Link} from "react-router-dom";
import {Avatar, Button, Col, Layout, Menu, Row} from "antd";
import {UserOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {SelectCurrentUserLogin, selectIsAuth} from "../../redux/auth-selector";
import {logoutThunk} from "../../redux/auth-reducer";

export type MapPropsType = {

}
export type DispatchPropsType = {

}
type PropsType = MapPropsType & DispatchPropsType;

export const AppHeader: React.FC<PropsType> = (props) => {
    const { Header} = Layout;

    let isAuth = useSelector(selectIsAuth)
    let login = useSelector(SelectCurrentUserLogin)

    const dispatch = useDispatch()
    const logoutCallBack = () => {
        dispatch(logoutThunk())
    }

    return (
        <Header className="header">
            <div className="logo"/>
            <Row>
                <Col span={16}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1"><Link to="/developers">Developers</Link></Menu.Item>
                    </Menu>
                </Col>
                {isAuth? <>
                        <Col span={2}>
                            <Avatar alt={login || " "} style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                        </Col>
                        <Col span={6}>
                            <Button onClick={logoutCallBack}>LogOut</Button>
                        </Col>
                </>

                    : <Col span={6}>
                        <Button>
                            <Link to={'/login'}>Login</Link>
                        </Button>
                    </Col> }

            </Row>

        </Header>
        //
        // <header  className={style.header}>
        //     <img src='https://alllogos.ru/images/logotip-ghostbuster.jpg'/>
        //     {isAuth? <p className={style.logOut} > {login} <button onClick={logoutThunk}>LogOut</button></p>
        //         : <div className={style.loginBlock}>
        //
        //     </div>}
        //
        // </header>
    )
}
