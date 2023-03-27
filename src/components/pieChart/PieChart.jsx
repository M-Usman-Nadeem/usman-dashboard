import React from "react";
import Chart from "react-apexcharts";
import img1 from '../../assets/pieChart/1.svg'
import img2 from '../../assets/pieChart/2.svg'
export default ()=>{
    // this.state = {
    //     options : {
    //         series: [ 65,35],
    //         labels: ['Apple', 'Mango'],
    //         dataLabels: {
    //           enabled: true
    //         },
    //         legend:{
    //           show: false
          
    //         },
    //       },        
    //       series: [ 65,35],
          
  

    // };
    const state = {
     
      options : {
     
          
      
        customLabels:[img1,img2],
        colors : ['#16C098','#5932EA',],
        series: [65,35],
        labels: ['Male','Female', ],
        dataLabels: {
          enabled: false,
        
        },
        legend:{
          show: false
        },
      },
      series: [ 65,35],
      chart: {
        height: '400'
    }
    

    };
    

    return (
      <div className="    border-solid h-[342px] max-w-[310px]   border-opacity-100  border-[1.81193px]">
        <div className="row h-full   ">
          <div className="py-[20px]  h-full px-[27px] flex flex-col justify-center items-center relative">
              <p className="self-start pb-[19px] font-bold text-[20px] whitespace-nowrap" >
              Employee Composition
              </p>
<div className=" relative ">
            <Chart
              options={state.options}
              series={state.series}
              type='donut'
              
              height='230px'
              />

                  <div className="flex gap-[10px] p-[5px] lg:p-[10px] absolute left-[-5%]  rounded-[10px] bottom-[65%] bg-[#FFFFFF] text-[20px] font-bold">

<img src={img1} alt="" />
<p>35%</p>
 </div>
 <div className=" flex gap-[10px]  absolute bottom-[19%] sm:bottom-[12%] p-[5px] lg:p-[10px] right-[-5%]  rounded-[10px] bg-[#FFFFFF] text-[20px] font-bold">
   
<img src={img2} alt="" />
<p>65%</p>
 </div>

              </div>
            <p className="text-[#949494] pt-[13px] text-center ">856 employee total</p>
          </div>
        </div>
        <div>

        </div>
    
      </div>
    );
}

