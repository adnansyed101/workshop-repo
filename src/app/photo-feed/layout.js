import "./styles.css";

export default function Layout(props) {
  return (
    <>
      {props.modal}
      {props.children}
    </>
  );
}
