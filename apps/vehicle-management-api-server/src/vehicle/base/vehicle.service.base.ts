/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Vehicle as PrismaVehicle,
  MaintenanceRecord as PrismaMaintenanceRecord,
  ServiceCenter as PrismaServiceCenter,
} from "@prisma/client";

export class VehicleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.VehicleCountArgs, "select">): Promise<number> {
    return this.prisma.vehicle.count(args);
  }

  async vehicles(args: Prisma.VehicleFindManyArgs): Promise<PrismaVehicle[]> {
    return this.prisma.vehicle.findMany(args);
  }
  async vehicle(
    args: Prisma.VehicleFindUniqueArgs
  ): Promise<PrismaVehicle | null> {
    return this.prisma.vehicle.findUnique(args);
  }
  async createVehicle(args: Prisma.VehicleCreateArgs): Promise<PrismaVehicle> {
    return this.prisma.vehicle.create(args);
  }
  async updateVehicle(args: Prisma.VehicleUpdateArgs): Promise<PrismaVehicle> {
    return this.prisma.vehicle.update(args);
  }
  async deleteVehicle(args: Prisma.VehicleDeleteArgs): Promise<PrismaVehicle> {
    return this.prisma.vehicle.delete(args);
  }

  async findMaintenanceRecords(
    parentId: string,
    args: Prisma.MaintenanceRecordFindManyArgs
  ): Promise<PrismaMaintenanceRecord[]> {
    return this.prisma.vehicle
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .maintenanceRecords(args);
  }

  async findServiceCenters(
    parentId: string,
    args: Prisma.ServiceCenterFindManyArgs
  ): Promise<PrismaServiceCenter[]> {
    return this.prisma.vehicle
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .serviceCenters(args);
  }
}