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
import { ServiceCenterWhereUniqueInput } from "../../serviceCenter/base/ServiceCenterWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { VehicleWhereUniqueInput } from "../../vehicle/base/VehicleWhereUniqueInput";

@InputType()
class MaintenanceRecordCreateInput {
  @ApiProperty({
    required: false,
    type: () => ServiceCenterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ServiceCenterWhereUniqueInput)
  @IsOptional()
  @Field(() => ServiceCenterWhereUniqueInput, {
    nullable: true,
  })
  serviceCenter?: ServiceCenterWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => VehicleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VehicleWhereUniqueInput)
  @IsOptional()
  @Field(() => VehicleWhereUniqueInput, {
    nullable: true,
  })
  vehicle?: VehicleWhereUniqueInput | null;
}

export { MaintenanceRecordCreateInput as MaintenanceRecordCreateInput };
