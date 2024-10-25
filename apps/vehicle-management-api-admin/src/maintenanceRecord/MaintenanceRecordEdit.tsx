import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ServiceCenterTitle } from "../serviceCenter/ServiceCenterTitle";
import { VehicleTitle } from "../vehicle/VehicleTitle";

export const MaintenanceRecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
