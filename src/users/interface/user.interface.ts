import {IsDateString, IsIn, IsNotEmpty, IsOptional, IsString, Matches} from 'class-validator';

const rex_email = "/^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/"
const rex_password = "\"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$\""

export class User {
    @IsNotEmpty()
    @IsString()
    _id: string;
    @IsString()
    @IsNotEmpty()
    uid: string;
    @IsString()
    @IsNotEmpty()
    @Matches(rex_email)
    email: string;
    @IsString()
    @IsNotEmpty()
    @Matches(rex_password)
    password: string;
    @IsString()
    @IsNotEmpty()
    full_name: string;
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    phone_number: string;
    @IsString()
    @IsIn(['MALE', 'FEMALE'])
    gender: string;
    @IsString()
    @IsNotEmpty()
    avatar: string;
    @IsString()
    @IsOptional()
    address: string;
    @IsOptional()
    @IsDateString()
    birthday: string;
}
