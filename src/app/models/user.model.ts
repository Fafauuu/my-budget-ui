import { AuthStatus } from '../enums';

export interface User {
  id?: number;
  keycloackSub?: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  password?: string;
  email?: string;
  authStatus: AuthStatus;
}

// export class User {
//   public id: number;
//   public keycloackSub: string;
//   public firstName: string;
//   public lastName: string;
//   public username: string;
//   public password: string;
//   public email: string;
//   public authStatus: AuthStatus;

//   constructor(
//     id?: number,
//     keycloackSub?: string,
//     firstName?: string,
//     lastName?: string,
//     username?: string,
//     password?: string,
//     email?: string,
//     authStatus?: AuthStatus
//   ) {
//     this.id = id || 0;
//     this.keycloackSub = keycloackSub || '';
//     this.firstName = firstName || '';
//     this.lastName = lastName || '';
//     this.username = username || '';
//     this.password = password || '';
//     this.email = email || '';
//     this.authStatus = authStatus || AuthStatus.LOGGED_OUT;
//   }
// }
