import React from "react";
import { Line } from "react-chartjs-2";
import "../../Assets/Css/Chart.scss";

function Chart() {
   const data = {
      labels: ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
         {
            label: "Coronavirus Cases",
            data: [7, 43, 18, 42, 23, 45, 2],
            borderColor: "#0e5f7c",
         },
         {
            label: "Recovered",
            data: [5, 36, 8, 25, 12, 31, 45],
            borderColor: "#1ee0ac",
         },
         {
            label: "Deaths",
            data: [0, 31, 4, 39, 21, 23, 31],
            borderColor: "#f64e60",
         },
      ],
   };
   const option = {
      responsive: true,
      title: {
         display: true,
         text: "Line chart",
      },
      scales: {
         y: {
            ticks: {
               min: 0,
               max: 50,
               stepSize: 10,
            },
         },
      },
   };
   return (
      <>
         <div className="chart-wrap">
            <Line data={data} options={option} />
         </div>
      </>
   );
}

export default Chart;
