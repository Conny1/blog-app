import { Link} from "react-router-dom";
import styled from "styled-components";
import { PostType } from "../types";
const Item = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    &:nth-child(2n + 1){
      flex-direction: ${(p: Props) => p.desc?'row-reverse':'column'};
    }


    @media screen and (max-width:957px)  {
      flex-direction:column;
      &:nth-child(2n + 1){
      flex-direction:column;
    }
        
    }
   
  `;
  const PostInfo = styled.div`
  /* outline:1px solid red; */
    width: ${(p: Props) => p.desc?'50%':'100%'};
    flex: 1;

    @media screen and (max-width:957px)  {
       
    width:100%;
        
    }
  `;
  const Title = styled.h1`
  text-transform:capitalize;
  font-size:${(p: Props) =>! p.desc &&'20px'};
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
  const Imagewrapper = styled.div`
    width: ${(p: Props) => p.desc?'40%':'100%'};
    max-height: 100vh;

    @media screen and (max-width:957px)  {
       
       width:100%;
           
       }
  `;
  const Image = styled.img`
    width: 100%;
    height: 100%;
  `;

  type Props = {
    desc:boolean
    post?:PostType
  }





const Homepost = ({desc, post}:Props) => {
  
  
  return (
    <Item desc={desc} >
      <PostInfo desc={desc} >
        <Title  desc={desc}  >{post?.postTitle}</Title>
       {desc && <Text>{post?.postDesc  } </Text>}
        <Button><Link to={`/post/${post?.postID}`} >Readmore</Link></Button>
      </PostInfo>

      <Imagewrapper  desc={desc}  >
        <Image
          src="https://media.istockphoto.com/id/529664572/photo/fruit-background.jpg?s=612x612&w=0&k=20&c=K7V0rVCGj8tvluXDqxJgu0AdMKF8axP0A15P-8Ksh3I="
          alt="post"
        />
      </Imagewrapper>
    </Item>
  );
};

export default Homepost;
