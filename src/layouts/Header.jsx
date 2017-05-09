import React, { Component } from 'react';
import { Layout, Row } from 'antd';
const { Header } = Layout;
import styles from './Header.less';

const HeaderLayout = () => (
  <Layout>
    <Header className={styles.header}>
      <Row>
        react-router4-webpack2-antd
        <section className={styles.user}>
          <img src="http://placehold.it/350x350" className={styles.user_avatar} />
          <span>nickname</span>
          {/*<Icon type="caret-down" />*/}
        </section>
      </Row>

    </Header>
  </Layout>
)

export default HeaderLayout;