import { StringFilter } from "../../util/StringFilter";
import { MaintenanceRecordListRelationFilter } from "../maintenanceRecord/MaintenanceRecordListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ServiceCenterListRelationFilter } from "../serviceCenter/ServiceCenterListRelationFilter";

export type VehicleWhereInput = {
  id?: StringFilter;
  maintenanceRecords?: MaintenanceRecordListRelationFilter;
  make?: StringNullableFilter;
  miles?: IntNullableFilter;
  model?: StringNullableFilter;
  name?: StringNullableFilter;
  registrationPlate?: StringNullableFilter;
  serviceCenters?: ServiceCenterListRelationFilter;
  yearOfManufacture?: IntNullableFilter;
};
