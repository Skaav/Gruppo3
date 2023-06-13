export interface IUser {
  id?: number;
  username?: string;
  email: string;
  profilePic?: string;
  description?: string;
  postArr:string[];
  followerArr:string[];
  followArr:string[]
}
