/*
 ** src/components/App.tsx
 */
 import { Route, Link } from "react-router-dom";
 import React from "react";
import { Menu, ConfigProvider, Layout } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import RouteDom from "./router";

 const App: React.FC = () => (
   <ConfigProvider locale={zhCN}>
         <div className="content">
           <RouteDom />
         </div>
   </ConfigProvider>
 );

 export default App;