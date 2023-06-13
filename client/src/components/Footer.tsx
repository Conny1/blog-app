import styled from "styled-components"


const Container =styled.div`
display:flex;
justify-content:space-between;
align-items:center;
background-color:#c0e6e8;
margin-bottom:30px;
/* width:100%; */
`
const Item =styled.div`
margin-left:30px;
margin-right:30px;

`
const Logo =styled.div``
const Brand = styled.h1`
margin-bottom:0;
font-size:20px;
`
const Text =styled.div``


const Footer = () => {
  return (
    <Container>
         <Logo>    
        <Item  >
        <Brand>MJC Blog </Brand>
        <span style={{fontSize:'10px'}} >Art and Technology</span>
        </Item>
      </Logo>

      <Item>
        <Text>
            Made with ☺️(joy) and Reactjs
        </Text>
      </Item>
    </Container>
  )
}

export default Footer