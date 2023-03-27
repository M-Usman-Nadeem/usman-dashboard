import React from "react";
import Siderbar from "./components/sideBar/sidebar";
import Nav from "./components/nav/nav";
import Cards from "./components/cards/cards";
import PieChart from "./components/lineChart/lineChart";
import LineChart from "./components/pieChart/PieChart";
import Status from "./components/employStatus/status";
function App() {
  return (
    <>
        
      <Siderbar />
      <div className="md:ml-[273px] p-[25px]    ">

        <Cards />

        <PieChart>
       
        </PieChart>
     
<div className="flex flex-col xl:flex-row mt-6 gap-6  justify-center items-center ">

        <Status />
        <LineChart></LineChart>
</div>
      </div>

    </>
  );
}

export default App;
