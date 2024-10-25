/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { VehicleService } from "../vehicle.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { VehicleCreateInput } from "./VehicleCreateInput";
import { Vehicle } from "./Vehicle";
import { VehicleFindManyArgs } from "./VehicleFindManyArgs";
import { VehicleWhereUniqueInput } from "./VehicleWhereUniqueInput";
import { VehicleUpdateInput } from "./VehicleUpdateInput";
import { MaintenanceRecordFindManyArgs } from "../../maintenanceRecord/base/MaintenanceRecordFindManyArgs";
import { MaintenanceRecord } from "../../maintenanceRecord/base/MaintenanceRecord";
import { MaintenanceRecordWhereUniqueInput } from "../../maintenanceRecord/base/MaintenanceRecordWhereUniqueInput";
import { ServiceCenterFindManyArgs } from "../../serviceCenter/base/ServiceCenterFindManyArgs";
import { ServiceCenter } from "../../serviceCenter/base/ServiceCenter";
import { ServiceCenterWhereUniqueInput } from "../../serviceCenter/base/ServiceCenterWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class VehicleControllerBase {
  constructor(
    protected readonly service: VehicleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Vehicle })
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createVehicle(
    @common.Body() data: VehicleCreateInput
  ): Promise<Vehicle> {
    return await this.service.createVehicle({
      data: data,
      select: {
        createdAt: true,
        id: true,
        make: true,
        miles: true,
        model: true,
        name: true,
        registrationPlate: true,
        updatedAt: true,
        yearOfManufacture: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Vehicle] })
  @ApiNestedQuery(VehicleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async vehicles(@common.Req() request: Request): Promise<Vehicle[]> {
    const args = plainToClass(VehicleFindManyArgs, request.query);
    return this.service.vehicles({
      ...args,
      select: {
        createdAt: true,
        id: true,
        make: true,
        miles: true,
        model: true,
        name: true,
        registrationPlate: true,
        updatedAt: true,
        yearOfManufacture: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Vehicle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async vehicle(
    @common.Param() params: VehicleWhereUniqueInput
  ): Promise<Vehicle | null> {
    const result = await this.service.vehicle({
      where: params,
      select: {
        createdAt: true,
        id: true,
        make: true,
        miles: true,
        model: true,
        name: true,
        registrationPlate: true,
        updatedAt: true,
        yearOfManufacture: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Vehicle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateVehicle(
    @common.Param() params: VehicleWhereUniqueInput,
    @common.Body() data: VehicleUpdateInput
  ): Promise<Vehicle | null> {
    try {
      return await this.service.updateVehicle({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          make: true,
          miles: true,
          model: true,
          name: true,
          registrationPlate: true,
          updatedAt: true,
          yearOfManufacture: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Vehicle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteVehicle(
    @common.Param() params: VehicleWhereUniqueInput
  ): Promise<Vehicle | null> {
    try {
      return await this.service.deleteVehicle({
        where: params,
        select: {
          createdAt: true,
          id: true,
          make: true,
          miles: true,
          model: true,
          name: true,
          registrationPlate: true,
          updatedAt: true,
          yearOfManufacture: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/maintenanceRecords")
  @ApiNestedQuery(MaintenanceRecordFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MaintenanceRecord",
    action: "read",
    possession: "any",
  })
  async findMaintenanceRecords(
    @common.Req() request: Request,
    @common.Param() params: VehicleWhereUniqueInput
  ): Promise<MaintenanceRecord[]> {
    const query = plainToClass(MaintenanceRecordFindManyArgs, request.query);
    const results = await this.service.findMaintenanceRecords(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        serviceCenter: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        vehicle: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/maintenanceRecords")
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "update",
    possession: "any",
  })
  async connectMaintenanceRecords(
    @common.Param() params: VehicleWhereUniqueInput,
    @common.Body() body: MaintenanceRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      maintenanceRecords: {
        connect: body,
      },
    };
    await this.service.updateVehicle({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/maintenanceRecords")
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "update",
    possession: "any",
  })
  async updateMaintenanceRecords(
    @common.Param() params: VehicleWhereUniqueInput,
    @common.Body() body: MaintenanceRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      maintenanceRecords: {
        set: body,
      },
    };
    await this.service.updateVehicle({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/maintenanceRecords")
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "update",
    possession: "any",
  })
  async disconnectMaintenanceRecords(
    @common.Param() params: VehicleWhereUniqueInput,
    @common.Body() body: MaintenanceRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      maintenanceRecords: {
        disconnect: body,
      },
    };
    await this.service.updateVehicle({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/serviceCenters")
  @ApiNestedQuery(ServiceCenterFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ServiceCenter",
    action: "read",
    possession: "any",
  })
  async findServiceCenters(
    @common.Req() request: Request,
    @common.Param() params: VehicleWhereUniqueInput
  ): Promise<ServiceCenter[]> {
    const query = plainToClass(ServiceCenterFindManyArgs, request.query);
    const results = await this.service.findServiceCenters(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,

        vehicle: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/serviceCenters")
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "update",
    possession: "any",
  })
  async connectServiceCenters(
    @common.Param() params: VehicleWhereUniqueInput,
    @common.Body() body: ServiceCenterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      serviceCenters: {
        connect: body,
      },
    };
    await this.service.updateVehicle({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/serviceCenters")
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "update",
    possession: "any",
  })
  async updateServiceCenters(
    @common.Param() params: VehicleWhereUniqueInput,
    @common.Body() body: ServiceCenterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      serviceCenters: {
        set: body,
      },
    };
    await this.service.updateVehicle({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/serviceCenters")
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "update",
    possession: "any",
  })
  async disconnectServiceCenters(
    @common.Param() params: VehicleWhereUniqueInput,
    @common.Body() body: ServiceCenterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      serviceCenters: {
        disconnect: body,
      },
    };
    await this.service.updateVehicle({
      where: params,
      data,
      select: { id: true },
    });
  }
}
