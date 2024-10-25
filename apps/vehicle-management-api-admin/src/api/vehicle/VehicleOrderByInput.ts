import { SortOrder } from "../../util/SortOrder";

export type VehicleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  make?: SortOrder;
  miles?: SortOrder;
  model?: SortOrder;
  name?: SortOrder;
  registrationPlate?: SortOrder;
  updatedAt?: SortOrder;
  yearOfManufacture?: SortOrder;
};
