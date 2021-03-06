import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import 'babel-polyfill';
import App from '../components/App';
import './index.less';


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// 模块热替换的 API
if (module.hot) {
  module.hot.accept('../components/App', () => {
    render(App)
  });
}
