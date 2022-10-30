import { IsNotEmpty } from 'class-validator';

export class ColorsDto {

    @IsNotEmpty()
    readonly site: string;

    @IsNotEmpty()
    readonly domain: string;

    @IsNotEmpty()
    readonly type: string;

    @IsNotEmpty()
    readonly rgb: string;

    @IsNotEmpty()
    readonly hex: string;

    @IsNotEmpty()
    readonly hsl: string;
}
