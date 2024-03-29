import { Link } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../redux/Slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Container = styled.div`
  /* outline:1px solid red;  */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;
const Logo = styled.div`
  /* outline:1px solid red; */
  width: 30%;
  position: relative;
`;
const Circle = styled.div`
  background-color: #c0e6e8;
  height: 60px;
  width: 60px;
  border-radius: 70px;
`;
const Category = styled.div`
  /* outline:1px solid red; */
  display: flex;
  flex: 1;
  gap: 5px;
  justify-content: space-evenly;
  align-items: center;
`;
const Brand = styled.h1`
  margin-bottom: 0;
  font-size: 20px;
`;
const Item = styled.div`
  /* outline:1px solid red; */
`;
const P = styled.p`
  cursor: pointer;
  font-weight: 500;
`;

type Props = {
  navCategories?: Array<string>;
  setcategory?: React.Dispatch<React.SetStateAction<string>>;
  setselectCat?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ navCategories, setcategory, setselectCat }: Props) => {
  const userAuthDet = useSelector(
    (state: RootState) => state?.AuthSlice?.authDetails
  );

  const dispatch = useDispatch();

  const userID = userAuthDet?.userID;

  const setcategoryHnadler = (item: string) => {
    if (setcategory) {
      setcategory(item);
    }
    if (setselectCat) {
      setselectCat(true);
    }
  };

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <Container>
      <Logo>
        <Circle></Circle>
        <Link to="/" style={{ color: "#000" }}>
          <Item style={{ position: "absolute", top: 0 }}>
            <Brand>MJC Blog </Brand>
            <span style={{ fontSize: "10px" }}>Art and Technology</span>
          </Item>
        </Link>
      </Logo>
      <Category>
        <Item>
          <P
            onClick={() => {
              if (setselectCat) {
                setselectCat(false);
              }
            }}
          >
            All
          </P>
        </Item>
        {navCategories?.map((item, i) => {
          return (
            <Item key={i}>
              <P onClick={() => setcategoryHnadler(item)}>{item}</P>
            </Item>
          );
        })}

        <Item>
          <Link to="/auth/signup" style={{ color: "#000" }}>
            SignUp
          </Link>
        </Item>
        <Item>
          {userID === undefined ? (
            <Link to="/auth" style={{ color: "#000" }}>
              Login
            </Link>
          ) : (
            <Link onClick={logoutHandler} to="/" style={{ color: "#000" }}>
              Logout
            </Link>
          )}
        </Item>

        <Item style={{ position: "relative" }}>
          <Circle></Circle>
          <Link
            to="/form"
            style={{ position: "absolute", color: "#000", top: 20 }}
          >
            Write
          </Link>
        </Item>
      </Category>
    </Container>
  );
};

export default Nav;
