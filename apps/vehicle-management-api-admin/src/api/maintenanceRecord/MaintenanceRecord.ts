import { ServiceCenter } from "../serviceCenter/ServiceCenter";
import { Vehicle } from "../vehicle/Vehicle";

export type MaintenanceRecord = {
  createdAt: Date;
  id: string;
  serviceCenter?: ServiceCenter | null;
  updatedAt: Date;
  vehicle?: Vehicle | null;
};
