import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Layout, Icon } from 'antd';
import Header from '../layouts/Header';

const { Content, Sider } = Layout;

const Home = () => (
  <div>
    home
    <br />
    <Link to="/post">to post</Link>
  </div>
)
const SideBar = () => <div>side bar</div>
const Post = () => <div>post</div>


const App = () => (
  <Router>
    <div>
      <Header />

      <Layout style={{ minHeight: '100vh' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Route path="/" component={SideBar} />
        </Sider>
        <Layout style={{ padding: '20px 24px 24px' }}>
          <Content style={{ background: '#fff', padding: 20 }}> 
            <Route exact path="/" component={Home} />
            <Route exact path="/post" component={Post} />
          </Content>
        </Layout>
      </Layout>
    </div>
  </Router>
)

export default App;