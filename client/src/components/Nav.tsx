import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
/* outline:1px solid red;  */
display:flex;
justify-content:space-between;
align-items:center;
  margin-top:20px;
  margin-bottom:30px;
`
const Logo = styled.div`
/* outline:1px solid red; */
width:30%;
position:relative;
cursor: pointer;
`
const Circle = styled.div`
    background-color:#c0e6e8;
    height:60px;
    width:60px;
    border-radius:70px;
`
const Category = styled.div`
/* outline:1px solid red; */
display:flex;
flex:1;
gap:5px;
justify-content:space-evenly;
align-items:center;
`
const Brand = styled.h1`
margin-bottom:0;
font-size:20px;
`
const Item = styled.div`
`
const P = styled.p`
cursor: pointer;
font-weight:500;
`


const Nav = () => {
  return (
    <Container>
      <Logo>
     <Circle></Circle>
        <Item style={{ position:'absolute', top:0 }} >
        <Brand>MJC Blog </Brand>
        <span style={{fontSize:'10px'}} >Art and Technology</span>
        </Item>

      </Logo>

      <Category>

      <Item>
          <P>Art</P>
        </Item>
        <Item>
          <P>Science</P>
        </Item>
        <Item>
          <P>Tectnology</P>
        </Item>
        <Item>
          <P>Design</P>
        </Item>



      <Item>
          <Link to='/auth/signup' style={{color:'#000'}} >create Account</Link>
        </Item>
      <Item>
          <Link to='/auth' style={{color:'#000'}} >Login</Link>
        </Item>

        <Item style={{position:'relative'}} >
            <Circle></Circle>
          <Link to='/form' style={{position:'absolute', color:'#000', top:20}} >Write</Link>
        </Item>
   
      </Category>

    </Container>
  )
}

export default Nav