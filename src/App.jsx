import { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Patients from "./components/Patients";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  //GET PATIENTS FROM LS
  useEffect(() => {
    const patientsLS = JSON.parse(localStorage.getItem("patients")) ?? [];
    setPatients(patientsLS);
  }, []);

  //SAVE PATIENTS IN LS
  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const updatedPatients = patients.filter((p) => p.id !== id);
    setPatients(updatedPatients);
  };

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <Patients
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App
