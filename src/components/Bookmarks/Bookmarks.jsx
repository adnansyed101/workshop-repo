import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-200 ml-4 mt-4 p-4">
      <div>
        <h3 className="text-4xl">Reading Time: {readingTime}</h3>
      </div>
      <h1 className="text-3xl text-center">Bookmarks: {bookmarks.length}</h1>
      {bookmarks.map((bookmark, index) => (
        <Bookmark key={index} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number
};

export default Bookmarks;
