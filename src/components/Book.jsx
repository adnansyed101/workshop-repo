import PropTypes from "prop-types";

const Book = ({ book }) => {
  const { image, bookName, author } = book;

  return (
    <div className="card bg-base-100 w-96 shadow-xl p-6">
      <figure className="bg-[#f3f3f3] py-8 rounded-lg">
        <img src={image} alt="Book" className="h-[166px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <div className="badge badge-secondary">NEW</div>
        <p>By: {author}</p>
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
