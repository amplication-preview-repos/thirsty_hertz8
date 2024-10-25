import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { MaintenanceRecordTitle } from "../maintenanceRecord/MaintenanceRecordTitle";
import { ServiceCenterTitle } from "../serviceCenter/ServiceCenterTitle";

export const VehicleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="maintenanceRecords"
          reference="MaintenanceRecord"
        >
          <SelectArrayInput
            optionText={MaintenanceRecordTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Make" source="make" />
        <NumberInput step={1} label="Miles" source="miles" />
        <TextInput label="Model" source="model" />
        <TextInput label="Name" source="name" />
        <TextInput label="RegistrationPlate" source="registrationPlate" />
        <ReferenceArrayInput source="serviceCenters" reference="ServiceCenter">
          <SelectArrayInput
            optionText={ServiceCenterTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="YearOfManufacture"
          source="yearOfManufacture"
        />
      </SimpleForm>
    </Edit>
  );
};
