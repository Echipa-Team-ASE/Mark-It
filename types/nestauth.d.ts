import { DefaultSession, DefaultUser } from "next-auth";

interface IUser extends DefaultUser {
    role: "user" | "admin" | "manager";
}
declare module "next-auth" {
    interface User extends IUser {}
    interface Session extends DefaultSession {
        user: IUser;
    }
}
declare module "next-auth/jwt" {
    interface JWT extends IUser {}
}