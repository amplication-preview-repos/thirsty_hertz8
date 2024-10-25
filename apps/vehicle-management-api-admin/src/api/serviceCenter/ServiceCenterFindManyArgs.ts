import { ServiceCenterWhereInput } from "./ServiceCenterWhereInput";
import { ServiceCenterOrderByInput } from "./ServiceCenterOrderByInput";

export type ServiceCenterFindManyArgs = {
  where?: ServiceCenterWhereInput;
  orderBy?: Array<ServiceCenterOrderByInput>;
  skip?: number;
  take?: number;
};
