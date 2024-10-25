import { MaintenanceRecord } from "../maintenanceRecord/MaintenanceRecord";
import { Vehicle } from "../vehicle/Vehicle";

export type ServiceCenter = {
  createdAt: Date;
  id: string;
  maintenanceRecords?: Array<MaintenanceRecord>;
  updatedAt: Date;
  vehicle?: Vehicle | null;
};
