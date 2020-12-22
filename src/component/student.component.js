import React, { useState } from "react";

import "./student.css";

const Student = (props) => {
    const [student, setStudent] = useState({
        name: "",
        email: "",
        supervisor: "",
    });

    const [students, setStudents] = useState([
        {
            id: 1,
            name: "qw fdfe",
            email: "sdfggh@wwwww.com",
            supervisor: 1,
        },

    ]);


    const handleChange = (event) => {
        //console.log(event.target.name);
        const { value, name } = event.target;
        setStudent({ ...student, [name]: value });
        event.preventDefault();
    };

    const onAddStudent = () => {
       //API implementaion
        setStudents([...students, student]);
    };

    const onDeleteStudent = (id) => {
        console.log(id);
       //API need to implemented
        const data = students.filter((stud) => stud.id !== id);
        setStudents(data);
    };

    return (
        <div className="container">
            <div className="add-student">
                <h1>Add Student:</h1>
                <div className="form-group">
                    <label className="form-label" htmlFor="name">
                        Name:
                    </label>
                    <input
                        className="form-input"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">
                        Email:
                    </label>
                    <input
                        className="form-input"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="supervisor">
                        Supervisor:
                    </label>
                    <input
                        className="form-input"
                        type="number"
                        name="supervisor"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="submit-btn" onClick={onAddStudent}>
                    Add student
                </button>
            </div>
            <div className="student-list">
                <h1>List of students:</h1>

                {students &&
                students.map((student) => {
                    return (
                        <div className="student-item" key={student.id}>
                            <label>Name:</label>
                            <input type="text" value={student.name} name="name" readOnly />
                            <label>Email:</label>
                            <input
                                type="email"
                                value={student.email}
                                name="email"
                                readOnly
                            />
                            <label>Supervisor:</label>
                            <input
                                type="number"
                                value={student.supervisor}
                                name="supervisor"
                                readOnly
                            />
                            <button onClick={() => props.setOpenStudent(student)}>
                                update
                            </button>
                            <button onClick={() => onDeleteStudent(student.id)}>
                                delete
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Student;