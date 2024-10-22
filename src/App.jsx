import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    setBookmarks((prev) => [...prev, blog]);
  };

  const handleMarkAsRead = (time, id) => {
    setReadingTime((prev) => prev + time);

    const remainingBookMarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );

    setBookmarks(remainingBookMarks);
  };

  return (
    <>
      <Header></Header>
      <main className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  );
};

export default App;
