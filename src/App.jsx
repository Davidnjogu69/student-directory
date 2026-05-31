import { useRef, useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import StudentCard from "./StudentCard";
import styles from "./App.module.css";

const students = [
  {
    id: 1,
    name: "Alice Kamau",
    email: "alice@example.com",
    phase: 4,
    status: "active",
    skills: ["React", "CSS Modules", "JavaScript"],
  },
  {
    id: 2,
    name: "Brian Otieno",
    email: "brian@example.com",
    phase: 3,
    status: "active",
    skills: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 3,
    name: "Christine Wanjiku",
    email: "christine@example.com",
    phase: 2,
    status: "suspended",
    skills: ["HTML", "CSS"],
  },
  {
    id: 4,
    name: "David Mwangi",
    email: "david@example.com",
    phase: 4,
    status: "active",
    skills: ["React", "Python", "Flask"],
  },
  {
    id: 5,
    name: "Esther Njeri",
    email: "esther@example.com",
    phase: 1,
    status: "inactive",
    skills: ["HTML"],
  },
  {
    id: 6,
    name: "Felix Odhiambo",
    email: "felix@example.com",
    phase: 3,
    status: "active",
    skills: ["JavaScript", "React", "CSS"],
  },
];

function App() {
  const inputRef = useRef();
  const [filteredStudents, setFilteredStudents] = useState(students);

  const handleSearch = () => {
    const query = inputRef.current.value.toLowerCase();

    const filtered = students.filter(student =>
      student.name.toLowerCase().includes(query)
    );

    setFilteredStudents(filtered);
  };

  const handleClear = () => {
    inputRef.current.value = "";
    setFilteredStudents(students);
  };

  return (
    <div className={styles.container}>
      <Header count={students.length} />

      <SearchBar
        inputRef={inputRef}
        onSearch={handleSearch}
        onClear={handleClear}
      />

      {filteredStudents.length === 0 ? (
        <p className={styles.empty}>No students found</p>
      ) : (
        <div className={styles.grid}>
          {filteredStudents.map(student => (
            <StudentCard key={student.id} {...student} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;