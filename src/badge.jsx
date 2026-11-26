export default function Badge(props) {
  return (
    <span class={`badge ${props.answer ? "yes" : "no"}`}>
      {props.answer ? "Yes" : "No"}
    </span>
  );
}