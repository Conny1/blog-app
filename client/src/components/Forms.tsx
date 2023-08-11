import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import {
  useUploadFileMutation,
  useWriteBlogPostMutation,
} from "../redux/rtqRequests";
import { v4 as uuidv4 } from "uuid"; // for generating postID on signup
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const NavAndFooterBar = styled.div`
  width: 84%;
`;
const Body = styled.div`
  width: 84%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
const Column1 = styled.div`
  /* outline:1px solid red; */
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 600px;
  overflow: scroll;
`;
const Column2 = styled.div`
  width: 40%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  outline: 1px solid gainsboro;
  margin-bottom: 10px;
  justify-content: space-evenly;
`;
const Input = styled.input``;
const Button = styled.button`
  width: 100px;
  background-color: inherit;
  border: 1px solid #63cdcd;
  color: #63cdcd;
  cursor: pointer;
`;
const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;
const Head = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
`;
const Label = styled.label``;
const Radiobtn = styled.div``;

const Forms = () => {
  const [value, setValue] = useState("");
  const [radioval, setradioval] = useState("");
  const [title, settitle] = useState("");
  const [file, setfile] = useState<File | Blob>();

  const [writeBlogPost, { isLoading, isSuccess, isError }] =
    useWriteBlogPostMutation();
  const [uploadFile, { data: filePath, isSuccess: sucessUploading }] =
    useUploadFileMutation();
  const userAuthDet = useSelector(
    (state: RootState) => state?.AuthSlice?.authDetails
  ); //getUser details for ID
  const navigate = useNavigate();
  // toast notification message

  useEffect(() => {
    const notify = (val: string) => toast(val);
    if (userAuthDet?.userID === undefined) {
      navigate("/auth");
    }
    if (isSuccess) {
      notify("Post submited succefully");
    }
    if (isError) {
      notify("Error while submiting, Try again");
    }
    if (isLoading) {
      notify("Loading...");
    }
  }, [navigate, userAuthDet, isSuccess, isLoading, isError]);

  // uploadfile handle
  useEffect(() => {
    const notify = (val: string) => toast(val);
    if (sucessUploading) {
      notify("Image Uploaded");
    }
  }, [sucessUploading]);

  const upLoad = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      await uploadFile(formData);
    }
  };

  const handlefileupload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setfile(e.target.files[0]);
    }
  };

  // subbmite blogpost to DB
  const submitBlog = () => {
    const postid = uuidv4().substring(0, 10);
    const userID = userAuthDet?.userID;
    if (userID) {
      const body = {
        postID: postid,
        postTitle: title,
        postDesc: value,
        img: filePath,
        uID: userID,
        postCategory: radioval,
      };
      if (!filePath) {
        const notify = (val: string) => toast(val);
        notify("Image not uploaded");
      } else {
        writeBlogPost(body);
      }
    }
  };

  console.log(filePath);

  return (
    <Container>
      <NavAndFooterBar>
        <Nav />
      </NavAndFooterBar>
      <Body>
        <ToastContainer />
        <Column1>
          <Input
            style={{
              height: "30px",
              border: "1px solid grey",
              outline: "none",
            }}
            type="text"
            placeholder="Title"
            onChange={(e) => settitle(e.target.value)}
          />

          <ReactQuill
            style={{ height: "70%", width: "100%" }}
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </Column1>

        <Column2>
          <Wrapper
            style={{
              height: "150px",
              lineHeight: 0,
            }}
          >
            <Head>Publish</Head>
            <Text>
              {" "}
              <b>Status</b> : Draft{" "}
            </Text>
            <Text>
              {" "}
              <b>Visibility</b> : Public{" "}
            </Text>
            {/* <Label
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                color: "blue",
                fontSize: "12px",
              }}
              htmlFor="file"
            >
              Choose image to upload
            </Label> */}

            <Input
              type="file"
              id="file"
              // style={{ display: "none" }}
              name="image"
              accept="image/png, image/jpeg"
              onChange={handlefileupload}
            />

            <Button onClick={upLoad}>save upload</Button>
          </Wrapper>

          <Wrapper>
            <Head>Category</Head>
            <Radiobtn>
              <Input
                type="radio"
                id="art"
                name="group"
                value="Art"
                onChange={(e) => setradioval(e.target.value)}
              />
              <Label htmlFor="art">Art</Label>
            </Radiobtn>

            <Radiobtn>
              <Input
                type="radio"
                id="science"
                name="group"
                value="Science"
                onChange={(e) => setradioval(e.target.value)}
              />
              <Label htmlFor="science">Science</Label>
            </Radiobtn>

            <Radiobtn>
              <Input
                type="radio"
                id="technology"
                name="group"
                value="Technology"
                onChange={(e) => setradioval(e.target.value)}
              />
              <Label htmlFor="technology">Technology</Label>
            </Radiobtn>

            <Radiobtn>
              <Input
                type="radio"
                id="media"
                name="group"
                value="Media"
                onChange={(e) => setradioval(e.target.value)}
              />
              <Label htmlFor="media">Media</Label>
            </Radiobtn>

            <Radiobtn>
              <Input
                type="radio"
                id="cinema"
                name="group"
                value="Cinema"
                onChange={(e) => setradioval(e.target.value)}
              />
              <Label htmlFor="cinema">Cinema</Label>
            </Radiobtn>

            <Radiobtn>
              <Input
                type="radio"
                id="design"
                name="group"
                value="Design"
                onChange={(e) => setradioval(e.target.value)}
              />
              <Label htmlFor="design">Design</Label>
            </Radiobtn>

            <Radiobtn>
              <Input
                type="radio"
                id="food"
                name="group"
                value="Food"
                onChange={(e) => setradioval(e.target.value)}
              />
              <Label htmlFor="Food">Food</Label>
            </Radiobtn>
          </Wrapper>
          <Button onClick={submitBlog}>Publish blog</Button>
        </Column2>
      </Body>
      <NavAndFooterBar>
        <Footer />
      </NavAndFooterBar>
    </Container>
  );
};

export default Forms;
