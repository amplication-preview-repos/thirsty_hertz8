import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ServiceCenterService } from "./serviceCenter.service";
import { ServiceCenterControllerBase } from "./base/serviceCenter.controller.base";

@swagger.ApiTags("serviceCenters")
@common.Controller("serviceCenters")
export class ServiceCenterController extends ServiceCenterControllerBase {
  constructor(
    protected readonly service: ServiceCenterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
