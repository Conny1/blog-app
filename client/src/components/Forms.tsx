import {useState} from 'react'
import styled from "styled-components"
import Nav from "./Nav"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const Navbar = styled.div`
width:84%;

`
const Body = styled.div`
width:84%;
display:flex;
justify-content:space-between;
gap:20px;
`
const Column1 = styled.div`
outline:1px solid red;
flex:1;
display:flex;
flex-direction:column;
gap:30px;
`
const Column2 = styled.div`
width:40%;
`
const Wrapper = styled.div`
display:flex;
flex-direction:column;
`
const Input = styled.input``
const Button = styled.button``
const Text = styled.p``
const Head = styled.h3``
const Label = styled.label``


const Forms = () => {
  const [value, setValue] = useState('');
  return (
    <Container>
      <Navbar>
        <Nav/>
      </Navbar>
      <Body>
        <Column1>
        <Input type="text" placeholder="Title" />

        <ReactQuill style={{height:'70%', border:'1px solid gray'}} theme="snow" value={value} onChange={setValue} />
        </Column1>

        <Column2>
        <Wrapper>
          <Head>Publish</Head>
          <Text> <b>Status</b> : Draft </Text>
          <Text> <b>Visibility</b> : Public </Text>
          <Label htmlFor="file">Choose image to upload</Label>
          <Input type='file' id='file' name='image' accept="image/png, image/jpeg"  />

          <Button>Save</Button>
        
        </Wrapper>

        <Wrapper>
          <Label htmlFor="art">Art</Label>
          <Input type='radio' id='art' name='group'  />

          <Label htmlFor="science">Science</Label>
          <Input type='radio' id='science' name='group'  />


          <Label htmlFor="technology">Technology</Label>
          <Input type='radio' id='technology' name='group'  />


          <Label htmlFor="media">Media</Label>
          <Input type='radio' id='media' name='group'  />

          <Label htmlFor="cinema">Cinema</Label>
          <Input type='radio' id='cinema' name='group'  />

          <Label htmlFor="design">Design</Label>
          <Input type='radio' id='design' name='group'  />

          <Label htmlFor="Food">Food</Label>
          <Input type='radio' id='food' name='group'  />
        </Wrapper>
        
        </Column2>
       
      </Body>
    </Container>
  )
}

export default Forms