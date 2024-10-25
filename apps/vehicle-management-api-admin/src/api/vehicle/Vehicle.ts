import { MaintenanceRecord } from "../maintenanceRecord/MaintenanceRecord";
import { ServiceCenter } from "../serviceCenter/ServiceCenter";

export type Vehicle = {
  createdAt: Date;
  id: string;
  maintenanceRecords?: Array<MaintenanceRecord>;
  make: string | null;
  miles: number | null;
  model: string | null;
  name: string | null;
  registrationPlate: string | null;
  serviceCenters?: Array<ServiceCenter>;
  updatedAt: Date;
  yearOfManufacture: number | null;
};
