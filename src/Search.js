export default function Search() {
  return (
    <div id="searchComponent">
      <input type="text" id="searchBar" placeholder="Search..." />
      <br />
      <input type="checkbox" id="filterOnlyAvailable" /> Only show products in
      stock
    </div>
  );
}
