import { ApiProperty } from "@nestjs/swagger";
import { Features, WorkTypes } from "src/utils/enum";

export class WorkDto {
    @ApiProperty({ required: true })
    name: string;
    @ApiProperty()
    income: number
    @ApiProperty()
    xp: number
    @ApiProperty({ isArray: true })
    features: Features[]
    @ApiProperty({})
    type: WorkTypes
}