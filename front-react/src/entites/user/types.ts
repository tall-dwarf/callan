

export interface IUser {
    id: number,
    name: string,
    email: string,
    created_at: string
}

export interface IToken{
    access_token: string,
    token_type: string,
    expires_in: number
}

export type AuthResponse = {
    user: IUser,
    token: IToken
}