import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceCenterServiceBase } from "./base/serviceCenter.service.base";

@Injectable()
export class ServiceCenterService extends ServiceCenterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
