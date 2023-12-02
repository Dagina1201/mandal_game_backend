import { ApiProperty } from "@nestjs/swagger"
import { ItemTypes } from "src/utils/enum"

export class ItemDto {
    @ApiProperty({ required: true })
    uri: string
    @ApiProperty({ required: true })

    name: string
    @ApiProperty({ required: true })

    code: string
    @ApiProperty({ required: true, enum: ItemTypes })

    type: ItemTypes
}