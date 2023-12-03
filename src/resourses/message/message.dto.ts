import { ApiProperty } from "@nestjs/swagger"
import { AgeTypes } from "src/utils/enum"

export class MessageDto {
    @ApiProperty({ required: true })
    text: string
    @ApiProperty({ enum: AgeTypes })
    ageTypes: AgeTypes
    @ApiProperty()
    action: string
}