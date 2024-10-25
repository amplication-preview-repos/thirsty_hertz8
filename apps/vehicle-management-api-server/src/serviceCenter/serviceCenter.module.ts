import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ServiceCenterModuleBase } from "./base/serviceCenter.module.base";
import { ServiceCenterService } from "./serviceCenter.service";
import { ServiceCenterController } from "./serviceCenter.controller";
import { ServiceCenterResolver } from "./serviceCenter.resolver";

@Module({
  imports: [ServiceCenterModuleBase, forwardRef(() => AuthModule)],
  controllers: [ServiceCenterController],
  providers: [ServiceCenterService, ServiceCenterResolver],
  exports: [ServiceCenterService],
})
export class ServiceCenterModule {}
