import { ApiProperty } from "@nestjs/swagger";

import { Decree, Features, Genders, MissionTypes, SavingTypes } from "src/utils/enum";

class Professions {
    @ApiProperty()
    prefession: string
    // @ApiProperty({ type: Decree })
    decree: Decree
}

class Talents {
    @ApiProperty()
    _id: string

    @ApiProperty()
    luck: number
    @ApiProperty({ isArray: true })
    features: Features[]
}

export class SavingDto {
    @ApiProperty()
    mission: MissionTypes
    @ApiProperty()
    type: SavingTypes
    @ApiProperty()
    money: number
    @ApiProperty()
    rate: number
    @ApiProperty()
    outcome: number

}


export class GameDto {
    @ApiProperty()
    age: number;

    // @ApiProperty({ type: Genders })
    gender: Genders

    @ApiProperty()
    child: string

    @ApiProperty({ type: Professions })
    prefession: Professions

    @ApiProperty({})
    talents: Talents[]

}