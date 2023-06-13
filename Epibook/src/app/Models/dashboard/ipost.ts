export interface IPost {
  userId:string;
  body:string;
  image?:string;
  cetegory:string;
  likes:string[],
  comments:Comment[]
}
