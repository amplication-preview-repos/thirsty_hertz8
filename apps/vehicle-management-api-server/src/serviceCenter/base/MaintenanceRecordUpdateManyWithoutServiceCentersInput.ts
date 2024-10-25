/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MaintenanceRecordWhereUniqueInput } from "../../maintenanceRecord/base/MaintenanceRecordWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MaintenanceRecordUpdateManyWithoutServiceCentersInput {
  @Field(() => [MaintenanceRecordWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MaintenanceRecordWhereUniqueInput],
  })
  connect?: Array<MaintenanceRecordWhereUniqueInput>;

  @Field(() => [MaintenanceRecordWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MaintenanceRecordWhereUniqueInput],
  })
  disconnect?: Array<MaintenanceRecordWhereUniqueInput>;

  @Field(() => [MaintenanceRecordWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MaintenanceRecordWhereUniqueInput],
  })
  set?: Array<MaintenanceRecordWhereUniqueInput>;
}

export { MaintenanceRecordUpdateManyWithoutServiceCentersInput as MaintenanceRecordUpdateManyWithoutServiceCentersInput };
