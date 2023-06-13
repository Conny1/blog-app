import { ChangeEvent, useState} from 'react'
import styled from "styled-components"
import Nav from "./Nav"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Footer from './Footer';



const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const NavAndFooterBar = styled.div`
width:84%;

`
const Body = styled.div`
width:84%;
display:flex;
justify-content:space-between;
gap:20px;
`
const Column1 = styled.div`
/* outline:1px solid red; */
flex:1;
display:flex;
flex-direction:column;
gap:30px;
height:600px;
overflow:scroll;

`
const Column2 = styled.div`
width:40%;
`
const Wrapper = styled.div`
display:flex;
flex-direction:column;
outline:1px solid gainsboro;
margin-bottom:10px;
justify-content:space-evenly;
`
const Input = styled.input``
const Button = styled.button`
width:100px;
background-color:inherit;
border:1px solid #63cdcd;
color: #63cdcd;
cursor:pointer;
`
const Text = styled.p`
margin-top:0;
margin-bottom:0;
`
const Head = styled.h3`
margin-top:0;
margin-bottom:0;
`
const Label = styled.label``
const Radiobtn = styled.div``


const Forms = () => {
  const [value, setValue] = useState('');
  const [radioval, setradioval] = useState('')
  const [file, setfile] = useState<File>()


  // uploadfile handle

  const handlefileupload=(e: ChangeEvent<HTMLInputElement>)=>{

    if(e.target.files){
      setfile(e.target.files[0])
    }

    
  }
  return (
    <Container>
      <NavAndFooterBar>
        <Nav/>
      </NavAndFooterBar>
      <Body>
        <Column1>
        <Input style={{
          height:'30px',
          border :'1px solid grey',
          outline:'none'
        }} type="text" placeholder="Title" />

        <ReactQuill style={{height:'70%', width:'100%'}} theme="snow" value={value} onChange={setValue} />
        </Column1>

        <Column2>
        <Wrapper style={{
          height:'150px',
          lineHeight:0
        }} > 
          <Head>Publish</Head>
          <Text> <b>Status</b> : Draft </Text>
          <Text> <b>Visibility</b> : Public </Text>
          <Label style={{textDecoration:'underline', cursor:'pointer', color:'blue', fontSize:'12px'}} htmlFor="file">Choose image to upload</Label>
          <Input type='file'  id='file' style={{display:'none'}}  name='image' accept="image/png, image/jpeg"   onChange={handlefileupload}  />

          <Button>Save</Button>
        
        </Wrapper>

        <Wrapper>
          <Head>Category</Head>
          <Radiobtn>
          <Input type='radio' id='art' name='group'   onChange={(e)=>setradioval(e.target.value)}  />
          <Label htmlFor="art">Art</Label>
          </Radiobtn>
         
         <Radiobtn>
         <Input type='radio' id='science' name='group'   onChange={(e)=>setradioval(e.target.value)} />
          <Label htmlFor="science">Science</Label>
         </Radiobtn>
          

         <Radiobtn>
         <Input type='radio' id='technology' name='group'  onChange={(e)=>setradioval(e.target.value)}  />
          <Label htmlFor="technology">Technology</Label>
         </Radiobtn>
          

         <Radiobtn>
         <Input type='radio' id='media' name='group'   onChange={(e)=>setradioval(e.target.value)}  />
          <Label htmlFor="media">Media</Label>
         </Radiobtn>
          
         <Radiobtn>
         <Input type='radio' id='cinema' name='group'   onChange={(e)=>setradioval(e.target.value)}  />
          <Label htmlFor="cinema">Cinema</Label>
         </Radiobtn>
          
        <Radiobtn>
        <Input type='radio' id='design' name='group'   onChange={(e)=>setradioval(e.target.value)}  />
          <Label htmlFor="design">Design</Label>
        </Radiobtn>
          
        <Radiobtn>
        <Input type='radio' id='food' name='group'   onChange={(e)=>setradioval(e.target.value)}  />
          <Label htmlFor="Food">Food</Label>
         
        </Radiobtn>
        </Wrapper>
        
        </Column2>
       
      </Body>
      <NavAndFooterBar>
      <Footer/>
      </NavAndFooterBar>
      
    </Container>
  )
}

export default Forms