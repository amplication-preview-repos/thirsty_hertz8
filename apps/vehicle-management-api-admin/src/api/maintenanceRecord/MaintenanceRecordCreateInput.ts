import { ServiceCenterWhereUniqueInput } from "../serviceCenter/ServiceCenterWhereUniqueInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type MaintenanceRecordCreateInput = {
  serviceCenter?: ServiceCenterWhereUniqueInput | null;
  vehicle?: VehicleWhereUniqueInput | null;
};
