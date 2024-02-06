import React from "react";

function StudentRow(props) {
  return (
    <tbody style={{ borderCollapse: "collapse", border: "1px solid #000000" }}>
      {props.students.map((student, index) => (
        <tr key={index}>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.age}</td>
          <td>{student.address}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default StudentRow;
