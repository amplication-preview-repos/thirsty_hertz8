import { StringFilter } from "../../util/StringFilter";
import { MaintenanceRecordListRelationFilter } from "../maintenanceRecord/MaintenanceRecordListRelationFilter";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type ServiceCenterWhereInput = {
  id?: StringFilter;
  maintenanceRecords?: MaintenanceRecordListRelationFilter;
  vehicle?: VehicleWhereUniqueInput;
};
