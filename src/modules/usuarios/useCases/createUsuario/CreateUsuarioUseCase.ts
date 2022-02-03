import { prisma } from "../../../../database/prismaUsuario";
import { hash } from "bcrypt";

interface ICreateUsuario {
    username: string;
    password: string
}

export class CreateUsuarioUseCase {
    async execute({password, username}: ICreateUsuario) {
        const usuarioExist = await prisma.usuario.findFirst({
            where: {
                username: {
                    mode: "insensitive"
                }
            }
        });

        if (usuarioExist) {
            throw new Error("Usuário já existe.");
        }

        const hashPassoword = await hash(password, 10);

        const user = await prisma.usuario.create({
            data: {
                username,
                password: hashPassoword
            }
        });

        return user;
    }
}