
import styled from 'styled-components'
import Nav from '../components/Nav'
import Homepost from '../components/Homepost'
import Footer from '../components/Footer'
import { useGetAllPostsQuery } from '../redux/rtqRequests'

const Container = styled.div`
/* outline:1px solid red; */
display:flex;
justify-content:center;
`
const Wrapper = styled.div`
/* outline:1px solid red; */
max-width: 85%;
`
const Body = styled.div`
margin-bottom:30px;
`

const Home = () => {

  const {data, isLoading} = useGetAllPostsQuery()


  if(isLoading){
    return <>Loading...</>
  }
  
  return (
    <Container>
<Wrapper>
  <Nav/>
  <Body>
    {
      data?.map((post)=>{
        return  <Homepost key={post.postID} post={post} desc={true} />
      })
    }   
  
  </Body>
 <Footer/>
</Wrapper>
    </Container>
  )
}

export default Home