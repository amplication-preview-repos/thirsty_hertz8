import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ServiceCenterTitle } from "../serviceCenter/ServiceCenterTitle";
import { VehicleTitle } from "../vehicle/VehicleTitle";

export const MaintenanceRecordCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="serviceCenter.id"
          reference="ServiceCenter"
          label="ServiceCenter"
        >
          <SelectInput optionText={ServiceCenterTitle} />
        </ReferenceInput>
        <ReferenceInput source="vehicle.id" reference="Vehicle" label="Vehicle">
          <SelectInput optionText={VehicleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
