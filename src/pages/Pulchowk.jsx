import React, { useEffect, useState } from 'react'
import { Chart as ChartJs, defaults } from 'chart.js/auto'
import { Bar, Line } from "react-chartjs-2"
import "./pulchowk.css"


// defaults.plugins.title.font.size=40;
defaults.plugins.title.color = 'black';
defaults.font.size = 16;
defaults.font.weight = "bold";

const Pulchowk = () => {
  const [chartData, setChartData] = useState([]);
  const [detailsActiveT, setDetailsActiveT] = useState(false);
  const [detailsActiveH, setDetailsActiveH] = useState(false);
  const [detailsActiveP, setDetailsActiveP] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    callApi();
    // callApi().then((d)=> setChartData(d));
    // console.log(chartData);
  }, [])

  const showDetailsT = () => {
    setTimeout(() => {
      setDetailsActiveT(!detailsActiveT);
    }, 300);
  }
  const showDetailsP = () => {
    setTimeout(() => {
      setDetailsActiveP(!detailsActiveP);
    }, 300);
  }
  const showDetailsH = () => {
    setTimeout(() => {
      setDetailsActiveH(!detailsActiveH);
    }, 300);
  }

  async function callApi() {

    const dataM = await fetch("https://api.thingspeak.com/channels/2407547/feeds.json")
      .then(response =>  response.json())
      .then((data)=>data)
      if(dataM){
        setChartData(dataM)
        console.log(dataM)
      }
      console.log(chartData)
  }
  const sumData1 = chartData?.feeds.map((data) => parseInt(data.field1))
  const avData1 = (Object.values(sumData1).reduce((a, b) => { return a + b }, 0)) / 100;

  const sumData2 = chartData?.feeds.map((data) => parseInt(data.field2))
  const avData2 = (Object.values(sumData2).reduce((a, b) => { return a + b }, 0)) / 100;

  const sumData3 = chartData?.feeds.map((data) => parseInt(data.field3))
  const avData3 = (Object.values(sumData3).reduce((a, b) => { return a + b }, 0)) / 100;
  const statusChecker = (avg0, avgR) => {
    if (avg0 > (avgR + 5)) {
      return "Danger"
    } else if (avg0 < (avgR - 5)) {
      return "Safe"
    }
    else {
      return "Normal"
    }
  }
  return (
    <>
      <div className="chart">
        <div className={`lineT ${detailsActiveT ? "details" : ""}`}>

          <Line data={{
            labels: chartData?.feeds.map((data) => data.created_at.slice(11, 19)),

            datasets: [
              {
                label: "Temperature",
                data: chartData?.feeds.map((data) => data.field1),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
                hoverBackgroundColor: "#fff",
              }
            ]

          }}
            options={{
              scales: {
                x: {
                  ticks: {
                    font: {
                      weight: "bold"
                    }
                  }
                },
                y: {
                  ticks: {
                    font: {
                      weight: "bold"
                    }
                  }
                }
              }

            }}
          />
        </div>
        <div className={`lineT ${detailsActiveT ? "detailsActive" : "details"} ${statusChecker(avData1, 30)}`}>
          <div className="status-content">

            <h4> Obtained Average Value : <span>{avData1}</span></h4>
            <h4> Required Average Value : <span>30</span></h4>
            <h4> Status : <span>{statusChecker(avData1, 30)}</span></h4>
          </div>

        </div>
        <button onClick={() => {
          showDetailsT();

        }}>{detailsActiveT ? "Show chart of Temperature" : "Show Remark about Temperature"}</button>
        <div className={`lineT ${detailsActiveP ? "details" : ""}`}>

          <Line data={{
            labels: chartData?.feeds.map((data) => data.created_at.slice(11, 19)),

            datasets: [

              {
                label: "PM Index 2.5",
                data: chartData?.feeds.map((data) => data.field3),
                backgroundColor: "#19F6C0",
                borderColor: "#19F6C0"
              }
            ]

          }}
            options={{
              scales: {
                x: {
                  ticks: {
                    font: {
                      weight: "bold"
                    }
                  }
                },
                y: {
                  ticks: {
                    font: {
                      weight: "bold"
                    }
                  }
                }
              }
            }}
          />

        </div>
        <div className={`lineT ${detailsActiveP ? "detailsActive" : "details"} ${statusChecker(avData2, 30)}`}>
          <div className="status-content">

            <h4> Obtained Average Value : <span>{avData2}</span></h4>
            <h4> Required Average Value : </h4>
            <h4> Status : <span>{statusChecker(avData2, 30)}</span></h4>
          </div>

        </div>
        <button onClick={() => {
          showDetailsP();

        }}>{detailsActiveP ? "Show chart of PM Index" : "Show Remark about PM Index"}</button>
        <div className={`lineT ${detailsActiveH ? "details" : ""}`}>

          <Line data={{
            labels: chartData?.feeds.map((data) => data.created_at.slice(11, 19)),

            datasets: [

              {
                label: "Humidity",
                data: chartData?.feeds.map((data) => data.field2),
                backgroundColor: "#6700CD",
                borderColor: "#6700CD"
              }
            ]

          }}
            options={{
              scales: {
                x: {
                  ticks: {
                    font: {
                      weight: "bold"
                    }
                  }
                },
                y: {
                  ticks: {
                    font: {
                      weight: "bold"
                    }
                  }
                }
              }
            }}
          />

        </div>
        <div className={`lineT ${detailsActiveH ? "detailsActive" : "details"} ${statusChecker(avData3, 30)}`}>
          <div className="status-content">
            <h4> Obtained Average Value : <span>{avData3}</span></h4>
            <h4> Required Average Value : </h4>
            <h4> Status : <span>{statusChecker(avData3, 30)}</span></h4>
          </div>

        </div>
        <button onClick={() => {
          showDetailsH();

        }}>{detailsActiveH ? "Show chart of Humidity" : "Show Remark about Humidity"}</button>
      </div>

    </>
  )
}

export default Pulchowk 
