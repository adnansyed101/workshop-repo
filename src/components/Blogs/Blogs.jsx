import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmark}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h1>Blogs</h1>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark}></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func
}

export default Blogs;
