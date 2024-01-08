export interface UserDetails {
    email: string;
    name: string | null;
    role: "user" | "admin" | "manager";
    manager: string | null | undefined;
}   