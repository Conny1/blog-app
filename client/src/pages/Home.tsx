import styled from "styled-components";
import Nav from "../components/Nav";
import Homepost from "../components/Homepost";
import Footer from "../components/Footer";
import { useEffect, useState, useCallback } from "react";
import {
  useGetAllPostsQuery,
  useGetBypostCategoryQuery,
} from "../redux/rtqRequests";

const Container = styled.div`
  /* outline:1px solid red; */
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  /* outline:1px solid red; */
  max-width: 85%;
`;
const Body = styled.div`
  margin-bottom: 30px;
`;

const Home = () => {
  const { data, isLoading } = useGetAllPostsQuery();
  const [navCategories, setnavCategories] = useState<string[]>([]);
  const [category, setcategory] = useState("");
  const [selectCat, setselectCat] = useState(false);
  // get get Post by nav categories
  const { data: categoryData, isLoading: iscategoryLoading } =
    useGetBypostCategoryQuery(category);

  const getCategories = useCallback(() => {
    const arr: string[] = [];
    data?.forEach((item) => {
      if (!arr?.includes(item.postCategory)) {
        arr.push(item.postCategory);
      }
    });
    setnavCategories(arr);
    // console.log(arr);
  }, [data]);
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  if (isLoading || iscategoryLoading) {
    return <>Loading...</>;
  }

  const NavProps = { navCategories, setcategory, setselectCat };
  // console.log(categoryData);
  return (
    <Container>
      <Wrapper>
        <Nav {...NavProps} />
        <Body>
          {selectCat
            ? categoryData?.map((post) => {
                return <Homepost key={post.postID} post={post} desc={true} />;
              })
            : data?.map((post) => {
                return <Homepost key={post.postID} post={post} desc={true} />;
              })}
        </Body>
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Home;
