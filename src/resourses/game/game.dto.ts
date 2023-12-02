import { ApiProperty } from "@nestjs/swagger";

import { Decree, Features, Genders } from "src/utils/enum";

class Professions {
    @ApiProperty()
    prefession: string
    @ApiProperty({ type: Decree })
    decree: Decree
}

class Talents {
    @ApiProperty()
    talent: string
    @ApiProperty()
    luck: number
    @ApiProperty({ enum: Features })
    feature: Features
}


export class GameDto {
    @ApiProperty()
    age: number;

    @ApiProperty({ enum: Genders })
    gender: Genders

    @ApiProperty()
    child: string

    @ApiProperty({ type: Professions })
    prefession: Professions

    @ApiProperty({ type: Talents, })
    talents: Talents[]

}