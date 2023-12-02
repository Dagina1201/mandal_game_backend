import { ApiProperty } from "@nestjs/swagger"

export class MessageDto {
    @ApiProperty({ required: true })
    text: string
    @ApiProperty()
    action: string
}