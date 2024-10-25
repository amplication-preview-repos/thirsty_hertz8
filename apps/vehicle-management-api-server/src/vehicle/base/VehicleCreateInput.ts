/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MaintenanceRecordCreateNestedManyWithoutVehiclesInput } from "./MaintenanceRecordCreateNestedManyWithoutVehiclesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsInt,
  Min,
  Max,
} from "class-validator";
import { Type } from "class-transformer";
import { ServiceCenterCreateNestedManyWithoutVehiclesInput } from "./ServiceCenterCreateNestedManyWithoutVehiclesInput";

@InputType()
class VehicleCreateInput {
  @ApiProperty({
    required: false,
    type: () => MaintenanceRecordCreateNestedManyWithoutVehiclesInput,
  })
  @ValidateNested()
  @Type(() => MaintenanceRecordCreateNestedManyWithoutVehiclesInput)
  @IsOptional()
  @Field(() => MaintenanceRecordCreateNestedManyWithoutVehiclesInput, {
    nullable: true,
  })
  maintenanceRecords?: MaintenanceRecordCreateNestedManyWithoutVehiclesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  make?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  miles?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  model?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  registrationPlate?: string | null;

  @ApiProperty({
    required: false,
    type: () => ServiceCenterCreateNestedManyWithoutVehiclesInput,
  })
  @ValidateNested()
  @Type(() => ServiceCenterCreateNestedManyWithoutVehiclesInput)
  @IsOptional()
  @Field(() => ServiceCenterCreateNestedManyWithoutVehiclesInput, {
    nullable: true,
  })
  serviceCenters?: ServiceCenterCreateNestedManyWithoutVehiclesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  yearOfManufacture?: number | null;
}

export { VehicleCreateInput as VehicleCreateInput };