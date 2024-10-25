import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SERVICECENTER_TITLE_FIELD } from "../serviceCenter/ServiceCenterTitle";
import { VEHICLE_TITLE_FIELD } from "../vehicle/VehicleTitle";

export const MaintenanceRecordList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"MaintenanceRecords"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="ServiceCenter"
          source="servicecenter.id"
          reference="ServiceCenter"
        >
          <TextField source={SERVICECENTER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Vehicle" source="vehicle.id" reference="Vehicle">
          <TextField source={VEHICLE_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
