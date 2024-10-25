import { MaintenanceRecordCreateNestedManyWithoutServiceCentersInput } from "./MaintenanceRecordCreateNestedManyWithoutServiceCentersInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type ServiceCenterCreateInput = {
  maintenanceRecords?: MaintenanceRecordCreateNestedManyWithoutServiceCentersInput;
  vehicle?: VehicleWhereUniqueInput | null;
};
