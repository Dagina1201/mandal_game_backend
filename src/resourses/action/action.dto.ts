import { ApiProperty } from "@nestjs/swagger";

class AnswerDto {
    @ApiProperty()
    answer: string
}

export class ActionDto {


    @ApiProperty()
    question: string
    @ApiProperty({ type: Array<AnswerDto> })
    answers: AnswerDto[]
}
