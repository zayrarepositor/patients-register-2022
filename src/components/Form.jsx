import React from 'react'
import { useState, useEffect} from 'react';


const Form = ({patients, setPatients, patient, setPatient}) => {
const idGenerator = () => {
  const random = Math.random().toString(36).substring(2);
  const date = Date.now().toString(36);
  return random + date;
};

const initialForm = {
  patientName: "",
  patientLastname: "",
  birthday: "",
  height: "",
  weight: "",
  notes: "",
  parentName: "",
  phone: "",
  email: "",
  contactInfo: "",
};

  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setForm(patient)
    }
  }, [patient]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({...form, [name]:value,});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { patientName, patientLastname, birthday, height, weight } = form
    
    if ([patientName, patientLastname, birthday, height, weight].includes(" ")) {
      console.log("campo requerido vacío");
      setError(true);
      return;
    }

    setError(false);
    
    if (patient.id) {
      //editing
      form.id = patient.id;
      const updatedPatients = patients.map((p) =>
        p.id === patient.id ? form : p
      );
      setPatients(updatedPatients);
      setPatient({});
    } else {
      //adding
      form.id = idGenerator();
      setPatients([...patients, form]);
    }
    
    setForm(initialForm);
  }


  return (
    <div className="md:w-1/2 lg:h-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Registration</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add and Manage{" "}
        <span className="text-indigo-600 font-bold">Patients</span>
      </p>

      <form
        className="bg-gray-100 shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {/*PATIENT INFO*/}
        <p className="text-lg mt-5 text-gray-700 text-left font-bold mb-5 uppercase">
          Patient <span className="text-indigo-600 font-bold">info</span>
        </p>
        {/*PATIENT NAME*/}
        <div className="mb-10">
          <label
            htmlFor="name"
            className="block font-bold uppercase text-gray-700"
          >
            name
          </label>
          <input
            id="name"
            type="text"
            placeholder="patient name"
            className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md"
            name="patientName"
            value={form.patientName}
            onChange={handleChange}
            required
          />
        </div>
        {/*PATIENT LASTNAME*/}
        <div className="mb-10">
          <label
            htmlFor="lastname"
            className="block font-bold uppercase text-gray-700"
          >
            lastname
          </label>
          <input
            id="lastname"
            type="text"
            placeholder="patient lastname"
            className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md"
            value={form.patientLastname}
            name="patientLastname"
            onChange={handleChange}
            required
          />
        </div>
        {/*PATIENT BIRTHDAY*/}
        <div className="mb-10">
          <label
            htmlFor="birthday"
            className="block font-bold uppercase text-gray-700"
          >
            birthday
          </label>
          <input
            id="birthday"
            type="date"
            min="1922-01-01"
            max="2032-01-01"
            placeholder="patient birthday"
            className="border-2 w-full p-2 mt-2 text-indigo-400 rounded-md"
            value={form.birthday}
            name="birthday"
            onChange={handleChange}
            required
          />
        </div>
        {/*PATIENT HEIGHT*/}
        <div className="mb-10">
          <label htmlFor="height" className="font-bold uppercase text-gray-700">
            height{" "}
          </label>
          <span className="font-bold text-gray-700">(cm)</span>
          <input
            id="height"
            type="number"
            min="40"
            max="200"
            placeholder="patient height (cm)"
            className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md"
            value={form.height}
            name="height"
            onChange={handleChange}
            required
          />
        </div>
        {/*PATIENT WEIGHT*/}
        <div className="mb-10">
          <label
            htmlFor="weight"
            className=" font-bold uppercase text-gray-700"
          >
            weight{" "}
          </label>
          <span className="font-bold text-gray-700">(Kg)</span>
          <input
            id="weight"
            type="number"
            min="2"
            max="200"
            step="0.1"
            placeholder="patient weight (Kg)"
            className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md"
            value={form.weight}
            name="weight"
            onChange={handleChange}
            required
          />
        </div>
        {/*NOTES*/}
        <div className="mb-10">
          <label
            htmlFor="notes"
            className="block font-bold uppercase text-gray-700"
          >
            notes
          </label>
          <textarea
            id="notes"
            placeholder="notes"
            className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md"
            value={form.notes}
            name="notes"
            onChange={handleChange}
          />
        </div>
        <hr></hr> {/*PARENT INFO*/}
        <p className="text-lg mt-5 text-gray-700 text-left font-bold mb-5 uppercase">
          Patient's <span className="text-indigo-600 font-bold">Parent</span>
        </p>
        <div className="mb-10">
          <label
            htmlFor="paname"
            className="block font-bold uppercase text-gray-700"
          >
            name
          </label>
          <input
            id="paname"
            type="text"
            placeholder="parent name"
            className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md"
            value={form.parentName}
            name="parentName"
            onChange={handleChange}
          />
        </div>
        {/*PARENT A PHONE*/}
        <div className="mb-10">
          <label
            htmlFor="paphone"
            className="block font-bold uppercase text-gray-700"
          >
            phone
          </label>
          <input
            id="paphone"
            type="tel"
            placeholder="parent phone"
            className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md"
            value={form.phone}
            name="phone"
            onChange={handleChange}
          />
        </div>
        {/*PARENT A MAIL*/}
        <div className="mb-10">
          <label
            htmlFor="paemail"
            className="block font-bold uppercase text-gray-700"
          >
            email
          </label>
          <input
            id="paemail"
            type="email"
            placeholder="parent email"
            className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md"
            value={form.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        {/*PARENT A CONTACT INFO*/}
        <div className="mb-10">
          <label
            htmlFor="pacontact"
            className="block font-bold uppercase text-gray-700"
          >
            more contact info
          </label>
          <input
            id="pacontact"
            type="text"
            placeholder="contact info"
            className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md"
            value={form.contactInfo}
            name="contactInfo"
            onChange={handleChange}
          />
        </div>
        <input
          type="submit"
          className="border-2 w-1/2 p-3 text-white bg-indigo-600 rounded-md font-bold uppercase shadow-md hover:bg-white  hover:text-indigo-600 cursor-pointer transition-all"
          value={patient.id?"edit patient":"add patient"}
        />
      </form>
    </div>
  );
}

export default Form