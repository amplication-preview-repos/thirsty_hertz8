import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ServiceCenterResolverBase } from "./base/serviceCenter.resolver.base";
import { ServiceCenter } from "./base/ServiceCenter";
import { ServiceCenterService } from "./serviceCenter.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ServiceCenter)
export class ServiceCenterResolver extends ServiceCenterResolverBase {
  constructor(
    protected readonly service: ServiceCenterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
