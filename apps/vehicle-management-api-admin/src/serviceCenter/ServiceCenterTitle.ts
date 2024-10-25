import { ServiceCenter as TServiceCenter } from "../api/serviceCenter/ServiceCenter";

export const SERVICECENTER_TITLE_FIELD = "id";

export const ServiceCenterTitle = (record: TServiceCenter): string => {
  return record.id?.toString() || String(record.id);
};
