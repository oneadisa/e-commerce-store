/* eslint-disable no-dupe-keys */
import React, { useState } from "react";
import Chart from "react-apexcharts";

function LineChart({ height }) {
  const [state, setState] = useState({
    options: {
      stroke: {
        curve: "straight",
      },
      colors: ["#7bc17e", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
      stroke: {
        width: 2,
      },
      xaxis: {
        categories: [1, 2, 3, 4, 5],
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        opposite: true,
      },
      dataLabels: {
        enabled: false,
      },
      chart: {
        toolbar: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 28, 50, 18, 48],
      },
    ],
  });

  return (
    <Chart
      options={state.options}
      series={state.series}
      type="area"
      height={height}
    />
  );
}

export default LineChart;
