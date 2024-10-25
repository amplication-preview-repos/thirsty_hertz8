import { ServiceCenterWhereUniqueInput } from "../serviceCenter/ServiceCenterWhereUniqueInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type MaintenanceRecordUpdateInput = {
  serviceCenter?: ServiceCenterWhereUniqueInput | null;
  vehicle?: VehicleWhereUniqueInput | null;
};
