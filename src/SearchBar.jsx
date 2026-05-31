import styles from "./SearchBar.module.css";

function SearchBar({ inputRef, onSearch, onClear }) {
  return (
    <div className={styles.search}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search student..."
        onChange={onSearch}
      />

      <button onClick={onClear}>
        Clear
      </button>
    </div>
  );
}

export default SearchBar;