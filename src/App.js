import React from "react";
import "./App.css";
import EditStudentDialog from "./component/edit-student.component";
import Student from "./component/student.component";
import { useEditStudent } from "./hooks/useEditStudent";

function App() {
    const openStudent = useEditStudent();
    return (
        <div className="App">
            <EditStudentDialog {...openStudent} />
            <Student {...openStudent} />
        </div>
    );
}

export default App;