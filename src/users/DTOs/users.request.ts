import { IsEmail, IsStrongPassword, Length } from "class-validator";

export class UserRequest {

    @Length(6,50, {message: "O nome deve ter entre 6 e 50 caracteres"})
    name:string;

    @IsEmail({}, {message:'Digite um E-mail válido'})
    email:string;

    @IsStrongPassword({}, {message:'A senha está muito fraca'})
    password:string;

}