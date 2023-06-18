import styled from "styled-components"
import Homepost from "../components/Homepost"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { useGetOnePostsQuery, useGetRecomendedQuery } from "../redux/rtqRequests"
import { useLocation } from "react-router-dom"

const ParentContainer = styled.div`
display:flex;
align-items:center;
flex-direction:column;
`
const Container = styled.div`
display:flex;
gap: 5px;
width:85%;
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
const NavAndFooterBar = styled.div`
width:85%;
`


const Post = () => {
  const id = useLocation().pathname.split('/')[2]

  const {data,isLoading} = useGetOnePostsQuery(id)
  
  const { data:similarPost, isLoading:ISsimilarPostLoading } = useGetRecomendedQuery(data?data[0]?.postCategory:'random')
  
  if(isLoading || !data )  return<>Loading...</>

 
  return (
   <ParentContainer>
   <NavAndFooterBar>
   <Nav/>
   </NavAndFooterBar>
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
        
        <Text style={{fontSize:'12px'}} > {data[0]?.postDate} </Text>
       </Item>
        </AccountInfo>


        <Desc>
        <Title>{data[0]?.postTitle}</Title>

        <Text>{data[0]?.postDesc}  </Text>
        </Desc>
        
        
      </Wrapper>

      <Recomentation>
        <Title  style={{fontSize:'25px', marginBottom:0}}>Similar Posts</Title>

        {
        ISsimilarPostLoading? <Title>Loading...</Title>: similarPost?.length===0?<Title>No recomended Posts  </Title> :similarPost?.map((post)=>{
            return <Homepost key={post.postID} desc={false} post={post} />
          })
        }
       
        

      </Recomentation>
      
    </Container>
<NavAndFooterBar>
<Footer/>
</NavAndFooterBar>
    </ParentContainer>
  )
}

export default Post