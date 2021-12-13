export interface IUser {
    objectId: string | null,
    username: string,
    password: string,
    email: string | null,
    emailVerified: boolean | null,
    mobilePhoneNumber: string | null,
    mobilePhoneVerified: boolean | null
}