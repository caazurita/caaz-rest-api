import { hash, compare } from "bcryptjs"

const encrypt = async (password: string) => {
    const hashPassword = await hash(password, 10)
    return hashPassword
}

const verify = async (password: string, hashPassword: string) => {
    const isValid = await compare(password, hashPassword)
    return isValid
}

export {
    encrypt,
    verify
}