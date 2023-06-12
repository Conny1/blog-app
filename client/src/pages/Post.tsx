import styled from "styled-components"
import Homepost from "../components/Homepost"
import Nav from "../components/Nav"

const ParentContainer = styled.div`
display:flex;
align-items:center;
flex-direction:column;
`
const Container = styled.div`
display:flex;
gap: 5px;
width:80%;
`
const Wrapper = styled.div`
width:70%;
`
const Imagewrapper = styled.div`
width:100%;
`
const Image = styled.img`
width:100%;
height:100%;
`
const AccountInfo = styled.div`
display:flex;
align-items:center;
`
const Desc = styled.div``
const Item = styled.div`
line-height:0;
margin-left:7px;
`
const Text = styled.p``
const Title = styled.h1``
const Recomentation = styled.div`
width:20%;
`
const NavBar = styled.div`
width:80%;
`


const Post = () => {
  return (
   <ParentContainer>
   <NavBar>
   <Nav/>
   </NavBar>
    <Container>
    
      <Wrapper>
        
        <Imagewrapper>
        <Image
          src="https://media.istockphoto.com/id/529664572/photo/fruit-background.jpg?s=612x612&w=0&k=20&c=K7V0rVCGj8tvluXDqxJgu0AdMKF8axP0A15P-8Ksh3I="
          alt="post"
        />
        </Imagewrapper>
        <AccountInfo>
          
        <Imagewrapper style={{width:'50px', height:'50px'}} >
        <Image
        style={{borderRadius:'50px'}}
          src="https://media.istockphoto.com/id/529664572/photo/fruit-background.jpg?s=612x612&w=0&k=20&c=K7V0rVCGj8tvluXDqxJgu0AdMKF8axP0A15P-8Ksh3I="
          alt="post"
        />
        </Imagewrapper>
       <Item>
       <Text style={{fontSize:'12px'}} >jane doe</Text> 
        
        <Text style={{fontSize:'12px'}} > posted an hour ago </Text>
       </Item>
        </AccountInfo>


        <Desc>
        <Title>Updated colorfully modernuzes herman Miller</Title>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut esse porro at blanditiis et consectetur repellendus odio ipsum culpa quam accusamus commodi molestiae laudantium voluptatem aliquam ex fugit cupiditate, id distinctio. Repellendus quas, veritatis mollitia, dolore molestiae, optio commodi accusamus reiciendis culpa laborum omnis eligendi doloribus quia modi molestias recusandae?

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus officia veniam incidunt exercitationem excepturi illum dignissimos ad? Doloribus deserunt asperiores dicta nulla. Dolore cupiditate omnis repudiandae perspiciatis, a dolor beatae veritatis, id, deleniti obcaecati aut quo eum laudantium eos rem? Quibusdam repellendus reiciendis vitae magnam eius minima laboriosam odit? Magnam quasi aspernatur cum repellendus, corrupti nesciunt, soluta eum mollitia ad neque necessitatibus! Inventore sapiente commodi officia cumque ipsa dolores illum.
        
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio animi facere exercitationem inventore vitae nobis illo atque veniam hic minima! Maxime, quibusdam a rem nam commodi voluptates officiis numquam asperiores, deleniti quaerat aperiam nisi vitae molestiae, doloremque maiores obcaecati! Facilis adipisci dolorem in nulla, ad asperiores provident harum voluptatem non, sint veritatis illo praesentium quaerat porro beatae tempore amet dolorum suscipit commodi? Dolor quisquam reiciendis libero, explicabo soluta mollitia error excepturi quae corporis. Fugit commodi dolor deleniti, quas neque laboriosam et! Quod, consequatur sed autem deserunt quis delectus perspiciatis id quibusdam provident in quaerat hic consectetur nihil odio repellendus sit.

        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti alias autem, quae ab numquam eveniet eum, est, quos quia quam dignissimos? Labore at qui aperiam officiis eum illum impedit rem!

        </Text>
        </Desc>
        
        
      </Wrapper>

      <Recomentation>
        <Homepost desc={false} />
        <Homepost desc={false} />
        <Homepost desc={false} />
        

      </Recomentation>
    </Container>

    </ParentContainer>
  )
}

export default Post