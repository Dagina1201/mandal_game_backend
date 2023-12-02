import { ApiProperty } from "@nestjs/swagger"
import { Features } from "src/utils/enum"

export class ProfessionDto {
    @ApiProperty({ required: true })
    name: string
    @ApiProperty({ type: Array<Features> })
    features: Features[]
    
}