import { ApiProperty } from "@nestjs/swagger";
import { Features } from "src/utils/enum";

export class TalentDto {
    @ApiProperty()
    name: string
    @ApiProperty({ type: Array<string>, enum: Features,  })
    features: Features[]
  
}