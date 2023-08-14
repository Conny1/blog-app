import { Link } from "react-router-dom";
import styled from "styled-components";
import { IDtypes, PostType } from "../types";
import sanitizeHtml from "sanitize-html";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
} from "@reduxjs/toolkit/dist/query";

type styleType = {
  desc: boolean;
};
const Item = styled.div<styleType>`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  &:nth-child(2n + 1) {
    flex-direction: ${({ desc }) => (desc ? "row-reverse" : "column")};
  }

  @media screen and (max-width: 957px) {
    flex-direction: column;
    &:nth-child(2n + 1) {
      flex-direction: column;
    }
  }
`;
const PostInfo = styled.div<styleType>`
  /* outline:1px solid red; */
  width: ${({ desc }) => (desc ? "50%" : "100%")};
  flex: 1;

  @media screen and (max-width: 957px) {
    width: 100%;
  }
`;
const Title = styled.h1<styleType>`
  text-transform: capitalize;
  font-size: ${({ desc }) => !desc && "20px"};
`;
const Text = styled.p``;
const Button = styled.button`
  background-color: inherit;
  outline: 1px solid #63cdcd;
  border: none;
  color: #63cdcd;
  height: 25px;
  cursor: pointer;
`;
const Imagewrapper = styled.div<styleType>`
  width: ${({ desc }) => (desc ? "40%" : "100%")};
  max-height: 100vh;

  @media screen and (max-width: 957px) {
    width: 100%;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

type Props = {
  desc: boolean;
  post?: PostType;
  deletePost: MutationTrigger<
    MutationDefinition<
      IDtypes,
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        Record<string, never>,
        FetchBaseQueryMeta
      >,
      never,
      void,
      "requestApi"
    >
  >;
};

const Homepost = ({ desc, post, deletePost }: Props) => {
  const userAuthDet = useSelector(
    (state: RootState) => state?.AuthSlice?.authDetails
  );

  const deleteIDs = { userid: post?.uID, postid: post?.postID };

  const userAdmin =
    userAuthDet?.isAdmin === 1 && userAuthDet.userID === post?.uID
      ? true
      : false;

  if (!post?.postDesc) {
    return <>Loading...</>;
  }
  const toSanitize = post.postDesc.substring(0, 300);

  const sanitizedHtml = { __html: sanitizeHtml(toSanitize) };

  return (
    <Item desc={desc}>
      <PostInfo desc={desc}>
        <Title desc={desc}>{post?.postTitle}</Title>
        {desc && <Text dangerouslySetInnerHTML={sanitizedHtml}></Text>}
        <Button>
          <Link to={`/post/${post?.postID}`}>Readmore</Link>
        </Button>

        {userAdmin ? (
          <Button
            onClick={() => deletePost(deleteIDs)}
            style={{ marginLeft: "10px" }}
          >
            Delete post
          </Button>
        ) : null}
      </PostInfo>

      <Imagewrapper desc={desc}>
        <Image src={`../upload/${post.img}`} alt="" />
      </Imagewrapper>
    </Item>
  );
};

export default Homepost;
