import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VehicleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Vehicles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Make" source="make" />
        <TextField label="Miles" source="miles" />
        <TextField label="Model" source="model" />
        <TextField label="Name" source="name" />
        <TextField label="RegistrationPlate" source="registrationPlate" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="YearOfManufacture" source="yearOfManufacture" />{" "}
      </Datagrid>
    </List>
  );
};
