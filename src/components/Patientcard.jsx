import React from 'react'

const Patientcard = ({ patient, setPatient, deletePatient }) => {
  const {
    patientName,
    patientLastname,
    birthday,
    height,
    weight,
    notes,
    contactInfo,
    email,
    parentName,
    phone, id,
  } = patient;

  const handleDelete = () => {
    const question = confirm("are you sure to delete a patient?")
    if (question) {
    deletePatient(id);
      
    }
  }

  return (
    <div className="mx-5 mt-3 mb-10 bg-gray-100 shadow-md px-5 py-10 rounded-xl">
      {/*PATIENT INFO*/}
      <p className="text-lg mt-5 text-gray-700 text-left font-bold mb-5 uppercase">
        Patient <span className="text-indigo-600 font-bold">info</span>
      </p>
      {/*PATIENT NAME*/}
      <p className="font-bold mb-3 uppercase text-gray-700">
        Name: <span className="font-normal normal-case">{patientName}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Lastname:{" "}
        <span className="font-normal normal-case">{patientLastname}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Birthday: <span className="font-normal normal-case">{birthday}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Height: <span className="font-normal normal-case">{height}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Height: <span className="font-normal normal-case">{weight}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Notes: <span className="font-normal normal-case">{notes}</span>
      </p>
      <hr></hr> {/*PARENT INFO*/}
      <p className="text-lg mt-5 text-gray-700 text-left font-bold mb-5 uppercase">
        Patient's <span className="text-indigo-600 font-bold">Parent</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Name: <span className="font-normal normal-case">{parentName}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Phone: <span className="font-normal normal-case">{phone}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        More contact info:{" "}
        <span className="font-normal normal-case">{contactInfo}</span>
      </p>
      <div className="flex justify-between">
        <button
          type="button"
          className="border-2 w-2/5 py-2 px-10 bg-indigo-600 text-white rounded-md font-bold
        uppercase shadow-md hover:bg-white hover:text-indigo-600 cursor-pointer
        transition-all"
          onClick={() => setPatient(patient)}
        >
          edit
        </button>
        <button
          type="button"
          className="border-2 w-2/5 containerpy-2 px-10 bg-indigo-600 text-white rounded-md font-bold
        uppercase shadow-md hover:bg-white hover:text-indigo-600 cursor-pointer
        transition-all"
          onClick={handleDelete}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Patientcard