export interface IUser {
  id?: number;
  username?: string;
  email: string;
  profilePic?: string;
  description?: string;
  postArr:number[];
  followerArr:number[];
  followArr:number[]
}
