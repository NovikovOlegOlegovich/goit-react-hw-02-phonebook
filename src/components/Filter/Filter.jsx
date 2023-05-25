export default function Filter({ filter }) {
  return (
    <label>
      Find contacts by name
      <input type="text" value={filter}></input>
    </label>
  );
}
