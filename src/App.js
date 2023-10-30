import React from "react";
import "../src/App.css";
import { Col, Image, Layout, Menu, Row } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import rendomImage from "./images/rendomimage.png";
import DashboardLayout from "./components/DashboardLayout";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import ListingComponent from "./redux/ListingComponent";


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/* <DashboardLayout /> */}
        <ListingComponent/>
      </PersistGate>
    </Provider>
  );
}

export default App;
