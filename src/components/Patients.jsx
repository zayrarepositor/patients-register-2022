import React from 'react'
import Patientcard from './Patientcard';

const Patients = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 md:h-screen lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Patients</h2>

      {patients && patients.length ? (
        <>
          <p className="text-xl mt-5 text-center mb-7">
            Selected <span className="text-indigo-600 font-bold">Patients</span>
          </p>
          <div className="md:overflow-y-scroll">
            {patients.map((patient) => (
              <Patientcard
                key={patient.id}
                patient={patient}
                setPatient={setPatient}
                deletePatient={deletePatient}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="text-xl mt-5 text-center mb-7">
            There are not{" "}
            <span className="text-indigo-600 font-bold">Selected Patient</span>
          </p>
        </>
      )}
    </div>
  );
};

export default Patients