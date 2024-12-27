import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [showSumForm, setSumForm] = useState(false);
  const [showSortForm, setSortForm] = useState(true);
  const [OSFolders, setOSFolders] = useState([]);
  const [processes, setProcesses] = useState([]);

  const deleteFolder = (id) => {
    setOSFolders((prev) => prev.filter((folder) => folder.id !== id));
  };

  const killProcesses = (id) => {
    setProcesses((prev) => prev.filter((process) => process.id !== id));
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();

    const updatedOsFolders = OSFolders.map((folder) => {
      if (folder.id === id) {
        return { ...folder, name: e.target.name.value };
      }
      return folder;
    });
    setOSFolders(updatedOsFolders);
  };

  console.log(OSFolders);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const type = e.target.type.value;

    setOSFolders((prev) => [
      ...prev,
      { id: Date.now().toString(36), name, type },
    ]);

    setShowForm(false);
  };

  const handleSummation = (e) => {
    e.preventDefault();
    const numberInput = e.target.numbers.value;
    const array = numberInput.split(",").map(Number);
    const sum = array.reduce((acc, val) => acc + val, 0);

    setProcesses((prev) => [
      ...prev,
      {
        id: Date.now().toString(36),
        name: "Summation",
        input: numberInput,
        output: sum,
      },
    ]);
    setSumForm(false);
  };

  const handleSort = (e) => {
    e.preventDefault();
    const isAsc = e.target.type.value;

    const numberInput = e.target.numbers.value;
    const array = numberInput.split(",").map(Number);

    let sorted = [];
    if (isAsc === "Ascending") {
      sorted = array.sort((a, b) => a - b);
    } else {
      sorted = array.sort((a, b) => b - a);
    }

    setProcesses((prev) => [
      ...prev,
      {
        id: Date.now().toString(36),
        name: "Sort",
        input: numberInput,
        output: sorted.join(", "),
      },
    ]);
    setSortForm(false);
  };

  return (
    <div>
      <header className="bg-blue-800 text-white p-4 text-2xl font-bold text-center">
        <h1>OS Simulator</h1>
      </header>
      <div className="flex justify-center my-4 gap-2">
        <button
          type="button"
          className="btn btn-primary btn-wide text-white"
          onClick={() => setShowForm(!showForm)}
        >
          Create Folder
        </button>
      </div>
      {showForm && (
        <form className="join flex justify-center mb-2" onSubmit={handleSubmit}>
          <input
            className="input input-bordered join-item"
            placeholder="Enter Name"
            name="name"
            required
          />
          <select
            className="select select-bordered join-item"
            name="type"
            required
          >
            <option value="File">File</option>
            <option value="Folder">Folder</option>
          </select>
          <button type="submit" className="btn btn-secondary join-item">
            Create
          </button>
        </form>
      )}
      <section className="container mx-auto border">
        <h1 className="font-semibold text-2xl p-4">File System</h1>
        <div className=" grid grid-cols-3 grid-rows-1 gap-2 p-4 ">
          {OSFolders.map((folder) => (
            <Card
              key={folder.id}
              folder={folder}
              deleteFolder={deleteFolder}
              handleUpdate={handleUpdate}
            />
          ))}
        </div>
      </section>
      <section className="container mx-auto">
        <h1 className="font-semibold text-2xl p-4">Processes</h1>
        <div className="space-x-2">
          <button
            type="button"
            className="btn btn-primary text-white"
            onClick={() => setSumForm(!showSumForm)}
          >
            Summation Process
          </button>
          <button
            type="button"
            className="btn btn-primary text-white"
            onClick={() => setSortForm(!showSortForm)}
          >
            Sorting Process
          </button>
        </div>
        {showSumForm && (
          <form className="join mt-2" onSubmit={handleSummation}>
            <input
              className="input input-bordered w-64 join-item"
              placeholder="Nums With Comma separated"
              name="numbers"
              required
            />
            <button type="submit" className="btn btn-secondary join-item">
              Show Sum
            </button>
          </form>
        )}
        {showSortForm && (
          <form className="join mt-2" onSubmit={handleSort}>
            <input
              className="input input-bordered w-64 join-item"
              placeholder="Nums With Comma separated"
              name="numbers"
              required
            />
            <select
              className="select select-bordered join-item"
              name="type"
              required
            >
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
            </select>
            <button type="submit" className="btn btn-secondary join-item">
              Show Sort
            </button>
          </form>
        )}
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Process Name</th>
                <th>Input</th>
                <th>Output</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {processes.map((process) => (
                <tr key={process.id}>
                  <th>{process.name}</th>
                  <td>{process.input}</td>
                  <td>{process.output}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => killProcesses(process.id)}
                    >
                      Kill
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default App;
