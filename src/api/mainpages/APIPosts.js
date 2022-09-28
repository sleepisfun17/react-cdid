import Axios from "../axios";

const getPost = () => {
  return Axios.get("postgenerated");
};

const addPost = (data) => {
  return Axios.post("post", data);
};

export { getPost, addPost };
