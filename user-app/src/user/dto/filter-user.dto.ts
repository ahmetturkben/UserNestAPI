import { IsBoolean, IsNumber, IsString, IsOptional, IsArray, ValidateNested } from "class-validator";

export class FilterUserDto {
    @IsNumber({}, { each: true })
    @IsOptional()
    @IsArray()
    ids?: number[];

    @IsString({ each: true })
    @IsOptional()
    @IsArray()
    names?: string[];;

    @IsString({ each: true })
    @IsOptional()
    @IsArray()
    surnames?: string[];;

    @IsString({ each: true })
    @IsOptional()
    @IsArray()
    emails?: string[];;

    @IsString({ each: true })
    @IsOptional()
    @IsArray()
    tcnos?: string[];;

    @IsBoolean()
    @IsOptional()
    isDeleted?: boolean;
}