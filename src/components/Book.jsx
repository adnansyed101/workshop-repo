import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, tags, category } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className="bg-[#f3f3f3] py-8 rounded-lg">
          <img src={image} alt="Book" className="h-[166px]" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-4">
            {tags.map((tag) => (
              <button
                key={tag}
                className="btn btn-xs bg-green-300 text-green-500"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <div className="badge badge-secondary">NEW</div>
          <p>By: {author}</p>
          <div className="border-t-2 border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
