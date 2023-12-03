import { ApiProperty } from "@nestjs/swagger"
import { Genders, ItemPriceType, ItemTypes } from "src/utils/enum"

export class ItemDto {
    @ApiProperty({ required: true })
    uri: string
    @ApiProperty({ required: true })

    name: string
    @ApiProperty({ required: true })

    code: string
    @ApiProperty({ required: true })

    price: number


    @ApiProperty({})
    priceDuration: ItemPriceType
    @ApiProperty({})
    status: number
    gender: Genders[]
    @ApiProperty({ required: true, enum: ItemTypes })

    type: ItemTypes
}