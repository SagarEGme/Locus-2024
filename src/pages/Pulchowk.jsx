import React, { useEffect, useState } from 'react'
import { Chart as ChartJs, defaults } from 'chart.js/auto'
import { Bar, Line } from "react-chartjs-2"
import "./pulchowk.css"
import Loader from '../component/Loader';


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
  // useEffect(() => {
  //   callApi();
  //   // callApi().then((d)=> setChartData(d));
  //   // console.log(chartData);
  // }, [])

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
  useEffect(() => {
    let isMounted = true;
    const callApi = async () => {
      try {
        const response = await fetch("https://api.thingspeak.com/channels/2407547/feeds.json");
        if (!response.ok) throw new Error('Network response was not ok');
        const dataM = await response.json();
        if (isMounted) setChartData(dataM);
      } catch (err) {
        if (isMounted) console.log(err.message);
      }
    };

    callApi();
    return () => { isMounted = false; };
  }, []);

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

      {chartData && chartData.feeds ? (<>

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
          <div className={`lineT ${detailsActiveT ? "detailsActive" : "details"} ${statusChecker(Object.values(chartData?.feeds.map((data) => parseInt(data.field1))).reduce((a, b) => { return a + b }, 0) / 100, 30)}`}>
            <div className="status-content">

              <h4> Obtained Average Value : <span>{Object.values(chartData?.feeds.map((data) => parseInt(data.field1))).reduce((a, b) => { return a + b }, 0) / 100};
              </span></h4>
              <h4> Required Average Value : <span>30</span></h4>
              <h4> Status : <span>{statusChecker(Object.values(chartData?.feeds.map((data) => parseInt(data.field1))).reduce((a, b) => { return a + b }, 0) / 100, 30)}</span></h4>
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
          <div className={`lineT ${detailsActiveP ? "detailsActive" : "details"} ${statusChecker(Object.values(chartData?.feeds.map((data) => parseInt(data.field1))).reduce((a, b) => { return a + b }, 0) / 100, 30)}`}>
            <div className="status-content">

              <h4> Obtained Average Value : <span>{Object.values(chartData?.feeds.map((data) => parseInt(data.field2))).reduce((a, b) => { return a + b }, 0) / 100}</span></h4>
              <h4> Required Average Value : </h4>
              <h4> Status : <span>{statusChecker(Object.values(chartData?.feeds.map((data) => parseInt(data.field2))).reduce((a, b) => { return a + b }, 0) / 100, 30)}</span></h4>
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
          <div className={`lineT ${detailsActiveH ? "detailsActive" : "details"} ${statusChecker(Object.values(chartData?.feeds.map((data) => parseInt(data.field3))).reduce((a, b) => { return a + b }, 0) / 100, 30)}`}>
            <div className="status-content">
              <h4> Obtained Average Value : <span>{Object.values(chartData?.feeds.map((data) => parseInt(data.field3))).reduce((a, b) => { return a + b }, 0) / 100}</span></h4>
              <h4> Required Average Value : </h4>
              <h4> Status : <span>{statusChecker(Object.values(chartData?.feeds.map((data) => parseInt(data.field1))).reduce((a, b) => { return a + b }, 0) / 100, 30)}</span></h4>
            </div>

          </div>
          <button onClick={() => {
            showDetailsH();

          }}>{detailsActiveH ? "Show chart of Humidity" : "Show Remark about Humidity"}</button>
        </div>
      </>) : <Loader/>}

    </>
  )
}

export default Pulchowk 
