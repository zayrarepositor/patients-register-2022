import React from "react";
import img from "./icons8-health-100.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 shadow-md rounded-lg py-10 px-5 mb-10 m-5">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            About the project
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            patients-register-2022
          </p>
          <p className="mt-6 max-w-screen-2xl text-xl text-gray-500 lg:mx-auto">
            ❤ Hey! I am Zayra, a developer student and it is my first very very
            small project with vite and tailwindcss.
          </p>
          <p className="mt-4 max-w-screen-2xl text-xl text-gray-500 lg:mx-auto">
            ☑ Patients Register is a project in progress. It was thought as a
            helper for my brothers (both phisicians). They could schedule
            patients, edit and delete them.
          </p>
          <p className="mt-4 -max-w-screen-2xl text-xl text-gray-500 lg:mx-auto">
            ✎ Next update: database (sequelize) and filters.
          </p>
          <p className="mt-4 max-w-screen-2xl text-xl text-gray-500 lg:mx-auto">
            ☢ You could check out project code at
            https://github.com/zayrarepositor/patients-register-2022
          </p>
          <p className="mt-4 max-w-screen-2xl text-xl text-gray-500 lg:mx-auto">
            ✉ Do you wanna contact me to give me respectfull opinions,
            suggestions, tips or just say "hello" ??
          </p>
          <ol>
            <li className="mt-4 max-w-screen-2xl text-xl text-gray-500 lg:mx-auto">
              <a
                href="https://www.linkedin.com/in/zayra-velasco-5bb934141"
                target="_blank"
              >
                ☞ https://www.linkedin.com/in/zayra-velasco-5bb934141
              </a>
            </li>
            <li className="mt-4 max-w-screen-2xl text-xl text-gray-500 lg:mx-auto">
              <a href="mailto:zayra.contacto@gmail.com" target="_blank">
                ☞ zayra.contacto@gmail.com
              </a>
            </li>
          </ol>
          <p className="mt-4 max-w-screen-2xl text-xl text-gray-500 lg:mx-auto">
            Good Life! ( ͡~ ͜ʖ ͡°)
          </p>
        </div>

        <div className=" mt-10 text-center">
          <dl className="space-y-10 max-w-2xl mx-auto  md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gray-500 text-white">
                  <img className="text-center" src={img} alt="..." />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  <a
                    target="_blank"
                    href="https://icons8.com/icon/FVr04om4HRi4/health"
                  >
                    Healt
                  </a>{" "}
                  icon by{" "}
                  <a target="_blank" href="https://icons8.com">
                    Icons8
                  </a>
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">❤ thanks ❤</dd>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gray-500 text-white">
                  <img className="text-center" src={img} alt="..." />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Inspired by
                  <a target="_blank" href="https://codigoconjuan.com/">
                    {" "}
                    Juan de la Torre
                  </a>
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">❤ thanks ❤</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Footer;
