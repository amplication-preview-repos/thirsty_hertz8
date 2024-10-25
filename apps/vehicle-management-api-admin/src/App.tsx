import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { VehicleList } from "./vehicle/VehicleList";
import { VehicleCreate } from "./vehicle/VehicleCreate";
import { VehicleEdit } from "./vehicle/VehicleEdit";
import { VehicleShow } from "./vehicle/VehicleShow";
import { MaintenanceRecordList } from "./maintenanceRecord/MaintenanceRecordList";
import { MaintenanceRecordCreate } from "./maintenanceRecord/MaintenanceRecordCreate";
import { MaintenanceRecordEdit } from "./maintenanceRecord/MaintenanceRecordEdit";
import { MaintenanceRecordShow } from "./maintenanceRecord/MaintenanceRecordShow";
import { ServiceCenterList } from "./serviceCenter/ServiceCenterList";
import { ServiceCenterCreate } from "./serviceCenter/ServiceCenterCreate";
import { ServiceCenterEdit } from "./serviceCenter/ServiceCenterEdit";
import { ServiceCenterShow } from "./serviceCenter/ServiceCenterShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Vehicle Management API"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Vehicle"
          list={VehicleList}
          edit={VehicleEdit}
          create={VehicleCreate}
          show={VehicleShow}
        />
        <Resource
          name="MaintenanceRecord"
          list={MaintenanceRecordList}
          edit={MaintenanceRecordEdit}
          create={MaintenanceRecordCreate}
          show={MaintenanceRecordShow}
        />
        <Resource
          name="ServiceCenter"
          list={ServiceCenterList}
          edit={ServiceCenterEdit}
          create={ServiceCenterCreate}
          show={ServiceCenterShow}
        />
      </Admin>
    </div>
  );
};

export default App;
