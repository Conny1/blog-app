import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useLoginMutation } from "../redux/rtqRequests";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { getUserDetails } from "../redux/Slice/authSlice";

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

const Login = () => {
  const [email, setemail] = useState("");
  const [passowrd, setpassowrd] = useState("");

  const [login, { data, isLoading, isSuccess, error }] = useLoginMutation();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const notify = (val: string) => toast(val);

  const loginHandle = async () => {
    const body = {
      userpassword: passowrd,
      email,
    };
    await login(body);
  };

  useEffect(() => {
    if (error) {
      notify("Invalid Username or Password");
    }
    if (isSuccess) {
      navigate("/form");
      dispatch(getUserDetails(data));
    }
  }, [error, isSuccess, navigate, data, dispatch]);

  if (isLoading) {
    return <>Loading</>;
  }

  return (
    <Container>
      <Wrapper>
        <ToastContainer />
        <Title>Login</Title>
        <Form>
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

          <Button onClick={loginHandle}>Login</Button>
          <Text>
            Don't have an account? <Link to="/auth/signup">Signup</Link>
          </Text>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
