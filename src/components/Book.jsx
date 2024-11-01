import PropTypes from "prop-types";

const Book = ({ book }) => {
  const { image, bookName, author, tags } = book;

  return (
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
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
