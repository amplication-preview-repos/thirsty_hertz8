import { SortOrder } from "../../util/SortOrder";

export type MaintenanceRecordOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  serviceCenterId?: SortOrder;
  updatedAt?: SortOrder;
  vehicleId?: SortOrder;
};
