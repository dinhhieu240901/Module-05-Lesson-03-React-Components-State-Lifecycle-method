import React, { useState } from "react";

function StudentList() {
  const [studentList, setStudentList] = useState([]);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [indexSelected, setIndexSelected] = useState(-1);

  const checkValidForm = () => {
    const { name, phone, email } = form;
    setIsValid(name !== "" && phone !== "" && email !== "" && !isNaN(phone));
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    checkValidForm();
  };
  const handleSelect = (studentIndex, index) => {
    setForm(JSON.parse(JSON.stringify(studentIndex)));
    setIndexSelected(index);
  };
  const handleSubmit = () => {
    if (isValid) {
      if (indexSelected !== -1) {
        const updatedList = [...studentList];
        updatedList[indexSelected] = { ...form };
        setStudentList(updatedList);
        setForm({ name: "", phone: "", email: "" });
        setIsValid(false);
        setIndexSelected(-1);
      } else {
        setStudentList([...studentList, form]);
        setForm({ name: "", phone: "", email: "" });
        setIsValid(false);
      }
    }
  };
  const handleDelete = (index) => {
    const deleteList = [...studentList];
    deleteList.splice(index, 1);
    setStudentList(deleteList);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">
        Quản lý sinh viên
      </h1>
      <form className="mb-4">
        <label className="block mb-2">
          <span className="text-gray-700">Name:</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Phone:</span>
          <input
            type="number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Email:</span>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!isValid}
          className={`p-2 rounded-md text-white ${
            isValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-500"
          }`}
        >
          Submit
        </button>
      </form>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 w-1/4">Tên</th>
            <th className="p-2 w-1/4">Điện thoại</th>
            <th className="p-2 w-1/4">Email</th>
            <th className="p-2 w-1/4">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="p-2">{student.name}</td>
              <td className="p-2">{student.phone}</td>
              <td className="p-2">{student.email}</td>
              <td className="p-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => handleSelect(student, index)}
                  className="bg-green-500 hover:bg-green-600 text-white p-1 mr-1 rounded-md"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 hover:bg-red-600 text-white p-1 rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
