import React, { useState } from "react";

import svg1 from "../../assets/sidebar/1.svg";
import svg2 from "../../assets/sidebar/2.svg";
import svg3 from "../../assets/sidebar/3.svg";
import svg4 from "../../assets/sidebar/4.svg";
import svg5 from "../../assets/sidebar/5.svg";
import svg6 from "../../assets/sidebar/6.svg";
import svg7 from "../../assets/sidebar/7.svg";
import svg8 from "../../assets/sidebar/33.svg";
import svg9 from "../../assets/sidebar/22.svg";
import svg11 from "../../assets/sidebar/11.svg";
import Nav from "../nav/nav";
const sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      {/* passing a burger icon in nav  */}
      <Nav>
        <button
          onClick={() => setSidebar(!sidebar)}
          className="bg-[#5932EA]  p-2  ml-3 text-sm rounded-lg md:hidden "
        >
          <svg
            className="w-6 h-6 "
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
           
             
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </Nav>
      <section
       
        style={{ boxShadow: "0px 20px 50px rgba(220, 224, 249, 0.5)" }}
        className={`overflow-auto fixed top-[102px] pl-[35px] h-full z-40 w-[273px] p-4  transition-transform  ${
          sidebar ? "-translate-x-full" : " "
        }  md:translate-x-0 bg-white dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label`}
      >
        <button
          type="button"
          onClick={() => setSidebar(!sidebar)}
          className="  text-gray-400 md:hidden bg-transparent    text-sm p-1.5  flex justify-end w-full  "
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
             
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
           
            ></path>
          </svg>
        </button>
        <div className="flex  justify-between ">
          <div className="flex justify-center gap-3  items-center">
            <img src={svg2} alt="" />
            <div className=" ">
              <p className="text-[18px] font-bold">Gavano</p>
              <p className="text-[13px] text-gray-400">HR Manager</p>
            </div>
          </div>
          <img src={svg3} alt="" />
        </div>
        <div className="py-4p overflow-y-auto font-bold text-[1.1875rem]">
          <ul className="flex flex-col gap-10  ">
            <li>
              <a
                href="#"
                className="flex  items-center p-2 text-base font-normal text-[#5932EA]  hover:bg-[#5932EA] hover:text-white rounded-lg dark:hover:bg-[#5932EA]"
              >
                <img src={svg1} alt="" />
                <span className="ml-3 font-bold text-[1.1875rem]  ">Dashboard</span>
                <div className="bg-[#5932EA] w-[6px] h-[40px] absolute left-0 rounded-tr-lg rounded-br-lg"> </div>

              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal  hover:bg-[#5932EA] hover:text-white rounded-lg dark:hover:bg-[#5932EA]"
              >
                <img src={svg6} alt="" />
                <span className="ml-3 font-bold text-[1.1875rem]">Finance</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal  hover:bg-[#5932EA] hover:text-white rounded-lg dark:hover:bg-[#5932EA]"
              >
                <img src={svg11} alt="" />
                <span className="ml-3 font-bold text-[1.1875rem]">Employees</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal  hover:bg-[#5932EA] hover:text-white rounded-lg dark:hover:bg-[#5932EA]"
              >
                <img src={svg4} alt="" />
                <span className="ml-3 font-bold text-[1.1875rem]">Company</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal  hover:bg-[#5932EA] hover:text-white rounded-lg dark:hover:bg-[#5932EA]"
              >
                <img src={svg8} alt="" />
                <span className="ml-3 font-bold text-[1.1875rem]">Candidate</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base  border-[#E0E0E0] font-normal  hover:bg-[#5932EA] hover:text-white rounded-lg dark:hover:bg-[#5932EA]"
              >
                <img src={svg5} alt="" />
                <span className="ml-3 font-bold text-[1.1875rem]">Calendar</span>
              </a>
            </li>
            <li className="border-b-[1px] border-dashed ">

            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal  hover:bg-[#5932EA] hover:text-white rounded-lg dark:hover:bg-[#5932EA]"
              >
                <img src={svg7} alt="" />
                <span className="ml-3 font-bold text-[1.1875rem]">Profile</span>
              </a>
            </li>

            <li className=" mb-20">
              <a
                href="#"
                className="flex items-center p-2  mb-  text-base font-normal  hover:bg-[#5932EA] hover:text-white rounded-lg dark:hover:bg-[#5932EA]"
              >
                <img src={svg9} alt="" />
                <span className="ml-3 font-bold text-[1.1875rem]">Setting</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className="w-[273px]" />
    </div>
  );
};

export default sidebar;
