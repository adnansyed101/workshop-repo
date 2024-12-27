/* eslint-disable react/prop-types */
const Card = ({ folder, deleteFolder, handleUpdate }) => {
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          {folder.name}
          <div className="badge badge-secondary">{folder.type}</div>
        </h2>
        <div className="card-actions justify-end">
          <button
            className="btn btn-error"
            onClick={() => deleteFolder(folder.id)}
          >
            Delete
          </button>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-accent">
              Update
            </div>
            <form
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-60 p-2 shadow join flex justify-center mb-2"
              onSubmit={(e) => handleUpdate(e, folder.id)}
            >
              <input
                className="input input-bordered mb-2"
                placeholder="Enter Name"
                name="name"
                required
              />
              <button type="submit" className="btn btn-secondary">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
