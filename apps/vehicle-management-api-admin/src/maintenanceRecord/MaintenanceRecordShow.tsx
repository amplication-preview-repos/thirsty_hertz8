import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SERVICECENTER_TITLE_FIELD } from "../serviceCenter/ServiceCenterTitle";
import { VEHICLE_TITLE_FIELD } from "../vehicle/VehicleTitle";

export const MaintenanceRecordShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
