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
      <div className="md:ml-[273px] !p-[25px]    ">

        <Cards />

        <PieChart>
       
        </PieChart>
     
<div className="flex flex-col lg:flex-row mt-6 gap-6   items-center justify-center xl:justify-start xl:items-start  ">

        <Status />
        <LineChart></LineChart>
</div>
      </div>

    </>
  );
}

export default App;
