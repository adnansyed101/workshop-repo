import { Link, useLoaderData } from "react-router-dom";
const Phones = () => {
  const phones = useLoaderData();
  

  return (
    <div>
      <h2>All phones are here</h2>
      {phones.map(phone => <li key={phone.id}><Link to={`/phones/${phone.id}`}>{phone.title}</Link></li>)}
    </div>
  );
};

export default Phones;
