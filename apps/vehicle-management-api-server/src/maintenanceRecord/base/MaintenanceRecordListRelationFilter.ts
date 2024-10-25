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
import { MaintenanceRecordWhereInput } from "./MaintenanceRecordWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MaintenanceRecordListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MaintenanceRecordWhereInput,
  })
  @ValidateNested()
  @Type(() => MaintenanceRecordWhereInput)
  @IsOptional()
  @Field(() => MaintenanceRecordWhereInput, {
    nullable: true,
  })
  every?: MaintenanceRecordWhereInput;

  @ApiProperty({
    required: false,
    type: () => MaintenanceRecordWhereInput,
  })
  @ValidateNested()
  @Type(() => MaintenanceRecordWhereInput)
  @IsOptional()
  @Field(() => MaintenanceRecordWhereInput, {
    nullable: true,
  })
  some?: MaintenanceRecordWhereInput;

  @ApiProperty({
    required: false,
    type: () => MaintenanceRecordWhereInput,
  })
  @ValidateNested()
  @Type(() => MaintenanceRecordWhereInput)
  @IsOptional()
  @Field(() => MaintenanceRecordWhereInput, {
    nullable: true,
  })
  none?: MaintenanceRecordWhereInput;
}
export { MaintenanceRecordListRelationFilter as MaintenanceRecordListRelationFilter };