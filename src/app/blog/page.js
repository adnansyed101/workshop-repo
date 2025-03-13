const Blog = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 1000);
  });
  return <h1>My Blog</h1>;
};

export default Blog;
