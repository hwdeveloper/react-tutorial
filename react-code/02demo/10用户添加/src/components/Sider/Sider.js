import React from "react";
import "./Sider.css";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
const { Sider } = Layout;
const { SubMenu } = Menu;
export default class MySider extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: false
    };
  }

  siderAction(_collapsed) {
    this.setState({
      collapsed: _collapsed
    });
  }
  render() {
    return (
      <Sider className="SiderBox" collapsed={this.state.collapsed}>
        <Menu defaultSelectedKeys={["1"]} mode="inline">
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>用户管理</span>
              </span>
            }
          >
            <Menu.Item key="/sub11">
              <Link to={"/home"}>
                <Icon type="user" />
                <span>用户浏览</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="/sub12">
              <Link to={"/home/add"}>
                <Icon type="user" />
                <span>用户添加</span>
              </Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="user" />
                <span>课程管理</span>
              </span>
            }
          >
            <Menu.Item key="/sub21">
              <Link to={"/home"}>
                <Icon type="user" />
                <span>课程浏览</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="/sub22">
              <Link to={"/home/add"}>
                <Icon type="user" />
                <span>课程添加</span>
              </Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="user" />
                <span>老师管理</span>
              </span>
            }
          >
            <Menu.Item key="/sub31">
              <Link to={"/home"}>
                <Icon type="user" />
                <span>老师浏览</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="/sub32">
              <Link to={"/home/add"}>
                <Icon type="user" />
                <span>老师添加</span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="user" />
                <span>营销管理</span>
              </span>
            }
          >
            <Menu.Item key="/sub41">
              <Link to={"/home"}>
                <Icon type="user" />
                <span>活动浏览</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="/sub42">
              <Link to={"/home/add"}>
                <Icon type="user" />
                <span>活动添加</span>
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
