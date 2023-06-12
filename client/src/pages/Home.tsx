
import styled from 'styled-components'
import Nav from '../components/Nav'
import Homepost from '../components/Homepost'

const Container = styled.div`
/* outline:1px solid red; */
display:flex;
justify-content:center;
`
const Wrapper = styled.div`
outline:1px solid red;
max-width: 85%;
`
const Body = styled.div``

const Home = () => {
  return (
    <Container>
<Wrapper>
  <Nav/>
  <Body>
   <Homepost/>
   <Homepost/>
   <Homepost/>
   <Homepost/>
   <Homepost/>
  </Body>

</Wrapper>
    </Container>
  )
}

export default Home