import { DefaultSession, DefaultUser } from 'next-auth';
import { AdapterUser } from '@auth/core/adapters';

interface IUser extends DefaultUser {
  id: string;
  role: 'user' | 'admin' | 'manager';
}
declare module 'next-auth' {
  interface User extends IUser {}
  interface Session extends DefaultSession {
    user: User;
  }
}
declare module 'next-auth/jwt' {
  interface JWT extends IUser {}
}

declare module '@auth/core/adapters' {
  interface AdapterUser {
    id: string;
    role: 'user' | 'admin' | 'manager';
  }
}
