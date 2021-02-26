import { IsBoolean, IsNumber, IsString } from "class-validator";

export class UserDto {
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsString()
    surname: string;

    @IsString()
    email: string;

    @IsString()
    tcno: string;

    @IsBoolean()
    isDeleted: boolean;
}
