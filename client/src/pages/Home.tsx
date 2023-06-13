
import styled from 'styled-components'
import Nav from '../components/Nav'
import Homepost from '../components/Homepost'
import Footer from '../components/Footer'

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
  return (
    <Container>
<Wrapper>
  <Nav/>
  <Body>
   <Homepost desc={true} />
   <Homepost desc={true} />
   <Homepost desc={true} />
   <Homepost desc={true} />
   <Homepost desc={true} />
  </Body>
 <Footer/>
</Wrapper>
    </Container>
  )
}

export default Home