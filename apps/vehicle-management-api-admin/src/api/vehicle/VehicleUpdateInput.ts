import { MaintenanceRecordUpdateManyWithoutVehiclesInput } from "./MaintenanceRecordUpdateManyWithoutVehiclesInput";
import { ServiceCenterUpdateManyWithoutVehiclesInput } from "./ServiceCenterUpdateManyWithoutVehiclesInput";

export type VehicleUpdateInput = {
  maintenanceRecords?: MaintenanceRecordUpdateManyWithoutVehiclesInput;
  make?: string | null;
  miles?: number | null;
  model?: string | null;
  name?: string | null;
  registrationPlate?: string | null;
  serviceCenters?: ServiceCenterUpdateManyWithoutVehiclesInput;
  yearOfManufacture?: number | null;
};
