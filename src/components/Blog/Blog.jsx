import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 space-y-4">
      <img
        src={cover}
        alt={`Cover Picture of the title ${title}`}
        className="w-full mb-8"
      />
      <div className="flex justify-between">
        <div className="flex mb-4">
          <img className="w-14" src={author_img} alt="Author Image" />
          <div className="ml-6">
            <h3 className="text-2x">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            className="ml-2 text-2xl text-red-600"
            onClick={() => handleAddToBookmark(blog)}
          >
            <CiBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash) => (
          <span key={hash}>
            <a href="#"> #{hash}</a>
          </span>
        ))}
      </p>
      <button
        className="text-purple-600 font-bold underline"
        onClick={() => handleMarkAsRead(blog.reading_time, blog.id)}
      >
        Mark as Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
