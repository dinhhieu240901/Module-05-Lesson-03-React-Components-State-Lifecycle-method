import { React, useState } from "react";
import StudentHeader from "./StudentHeader";
import StudentRow from "./StudentRow";

function Students() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Nguyen Le Dinh Hieu",
      age: 20,
      address: "Ho Chi Minh City",
    },
    {
      id: 1,
      name: "Nguyen Thi Thanh Thao",
      age: 20,
      address: "Dong Nai City",
    },
  ]);
  return (
    <table style={{ borderCollapse: "collapse", border: "1px solid #000000" }}>
      <StudentHeader />
      <StudentRow students={students} />
    </table>
  );
}

export default Students;
