import { MaintenanceRecordUpdateManyWithoutServiceCentersInput } from "./MaintenanceRecordUpdateManyWithoutServiceCentersInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type ServiceCenterUpdateInput = {
  maintenanceRecords?: MaintenanceRecordUpdateManyWithoutServiceCentersInput;
  vehicle?: VehicleWhereUniqueInput | null;
};
