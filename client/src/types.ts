export type AuthType = {
  userID?: string;
  userName?: string | null;
  userpassword?: string | null;
  email?: string | null;
  isAdmin?: number;
  tokens?: string | null;
};

export type PostType = {
  postID: string;
  postTitle: string;
  postDesc: string;
  img?: string;
  postDate: string;
  uID: string;
  postCategory: string;
};

export type WritePostType = {
  postID: string;
  postTitle: string;
  postDesc: string;
  img?: string;
  uID: string;
  postCategory: string;
};

export type IDtypes = {
  userid?: string;
  postid?: string;
};
