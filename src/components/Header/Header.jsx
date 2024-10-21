import profileImg from "../../assets/images/profile.png"

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profileImg} alt="Person" />
    </header>
  );
};

export default Header;
