import { IsNotEmpty, MinLength, } from 'class-validator';


export class UsersDto {
    @IsNotEmpty()
    readonly login: string;


    @IsNotEmpty()
    readonly hash: string;
}
