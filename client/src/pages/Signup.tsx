import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {useSignUpMutation} from '../redux/rtqRequests'
import { v4 as uuidv4 } from 'uuid'; // for generating userID on signup
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  


const Container = styled.div`
  outline: 1px solid red;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c0e6e8;
`;
const Wrapper = styled.div`
  /* outline: 1px solid red; */
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  border-radius: 3px;
`;
const Item = styled.div`
  outline: 1px solid gainsboro;
  height: 40px;
  width: 60%;
`;
const Text = styled.p`
  font-size: 12px;
`;
const Input = styled.input`
  width: 94%;
  border: none;
  outline: none;
`;
const Button = styled.button`
  height: 35px;
  color: #fff;
  background-color: #34a7a7;
  border: none;
  width: 60%;
`;
const Title = styled.h2`
  color: #34a7a7;
  margin-top: 0;
`;

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [passowrd, setpassowrd] = useState("");
  const navigate = useNavigate()

  const [signUp, {isLoading, isSuccess, error} ] = useSignUpMutation()
  
    // toast notification message
    const notify = () => toast("An Account with that email");
  const signupHandle= async()=>{

    const userid = uuidv4().substring(0,10)
    const body ={
      userID:userid,
      userName:name,
      userpassword:passowrd,
      email,
      isAdmin:1
    }
    await signUp(body)
   
  }

  useEffect(() => {
   
    if(error){
      notify()
    }   
    if(isSuccess){
      navigate('/auth')
    }
  
  }, [isSuccess ,error, navigate])

  if(isLoading){
    return <>Loading</>
  }
  return (
    <Container>
      <Wrapper>
        <ToastContainer/>
        <Title>Register</Title>
        <Form>
          <Item>
            <Input
              type="text"
              onChange={(e) => {
                setname(e.target.value);
              }}
              placeholder="UserName"
            />
          </Item>

          <Item>
            <Input
              type="text"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              placeholder="email"
            />
          </Item>

          <Item>
            <Input
              type="password"
              onChange={(e) => {
                setpassowrd(e.target.value);
              }}
              placeholder="password"
            />
          </Item>

          <Button onClick={signupHandle} >Resgister</Button>
          <Text>
            Do you have an account? <Link to="/auth">Login</Link>
          </Text>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Signup;
