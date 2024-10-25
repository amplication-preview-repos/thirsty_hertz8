import { MaintenanceRecordCreateNestedManyWithoutVehiclesInput } from "./MaintenanceRecordCreateNestedManyWithoutVehiclesInput";
import { ServiceCenterCreateNestedManyWithoutVehiclesInput } from "./ServiceCenterCreateNestedManyWithoutVehiclesInput";

export type VehicleCreateInput = {
  maintenanceRecords?: MaintenanceRecordCreateNestedManyWithoutVehiclesInput;
  make?: string | null;
  miles?: number | null;
  model?: string | null;
  name?: string | null;
  registrationPlate?: string | null;
  serviceCenters?: ServiceCenterCreateNestedManyWithoutVehiclesInput;
  yearOfManufacture?: number | null;
};
