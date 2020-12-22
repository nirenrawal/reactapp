import React, { Fragment } from "react";
import "./student.css";

const EditStudentDialog = (props) => {
    const { openStudent, setOpenStudent } = props;


    function close() {
        setOpenStudent();
    }
    const handleChange = (event) => {
        event.preventDefault();
        const { value, name } = event.target;
        setOpenStudent({ ...openStudent, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        alert("success");
        setOpenStudent();
        //API Need to be implemented
    };

    if (!openStudent) return null;

    return (
        <Fragment>
            <div className="dialog-shadow" />
            <div className="dialog">
                <h1>Update Student</h1>
                <div className="form-group">
                    <label className="form-label" htmlFor="name">
                        Name:
                    </label>
                    <input
                        className="form-input"
                        type="text"
                        name="name"
                        value={openStudent.name}
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
                        value={openStudent.email}
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
                        value={openStudent.supervisor}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="submit-btn" onClick={onSubmit}>
                    Update student
                </button>
            </div>
        </Fragment>
    );
};

export default EditStudentDialog;