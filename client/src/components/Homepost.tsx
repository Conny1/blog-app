import styled from "styled-components";

const Homepost = () => {
  const Item = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    &:nth-child(2n + 1){
      flex-direction:row-reverse;
    }
  `;
  const PostInfo = styled.div`
    width: 50%;
    flex: 1;
  `;
  const Title = styled.h1``;
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
    width: 40%;
    max-height: 100vh;
  `;
  const Image = styled.img`
    width: 100%;
    height: 100%;
  `;
  return (
    <Item>
      <PostInfo>
        <Title>Updated colorfully modernuzes herman Miller</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eos
          quos temporibus nulla cumque perspiciatis numquam aperiam, nemo harum
          non nesciunt cum corrupti accusantium molestias, rem praesentium
          libero ipsam quasi voluptate quaerat voluptatem neque quisquam! Iure
          impedit explicabo eos qui recusandae dolorum quas a nam quos, beatae
          commodi temporibus cumque.
        </Text>
        <Button>Readmore</Button>
      </PostInfo>

      <Imagewrapper>
        <Image
          src="https://media.istockphoto.com/id/529664572/photo/fruit-background.jpg?s=612x612&w=0&k=20&c=K7V0rVCGj8tvluXDqxJgu0AdMKF8axP0A15P-8Ksh3I="
          alt="post"
        />
      </Imagewrapper>
    </Item>
  );
};

export default Homepost;
