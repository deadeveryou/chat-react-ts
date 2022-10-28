import { Route, Link } from "react-router-dom";
import React from "react";
import { Menu, ConfigProvider, Layout } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import { Provider } from 'react-redux';

import RouteDom from "./router";
import store from "./store/store";


const App: React.FC = () => (
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <div className="content">
        <RouteDom />
      </div>
    </Provider>
  </ConfigProvider>
);

export default App;