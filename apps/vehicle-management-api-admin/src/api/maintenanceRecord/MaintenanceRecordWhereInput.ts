import { StringFilter } from "../../util/StringFilter";
import { ServiceCenterWhereUniqueInput } from "../serviceCenter/ServiceCenterWhereUniqueInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type MaintenanceRecordWhereInput = {
  id?: StringFilter;
  serviceCenter?: ServiceCenterWhereUniqueInput;
  vehicle?: VehicleWhereUniqueInput;
};
