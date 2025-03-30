import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Pie, Bar } from 'react-chartjs-2';
import './EmissionsData.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const EmissionsData = () => {
  // Data for CO2 Emissions over time
  const co2Data = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: 'Transportation',
        data: [2500, 2400, 1800, 2200, 2300],
        backgroundColor: 'rgba(128, 0, 0, 0.5)',
        borderColor: 'rgba(128, 0, 0, 1)',
        fill: true,
      },
      {
        label: 'Natural Gas',
        data: [800, 750, 700, 720, 680],
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
        borderColor: 'rgba(255, 206, 86, 1)',
        fill: true,
      },
      {
        label: 'Purchased Electricity',
        data: [1200, 1150, 900, 1000, 950],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: true,
      }
    ],
  };

  // Data for Methane Emissions
  const methaneData = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [{
      label: 'Methane Emissions',
      data: [120, 115, 90, 95, 88],
      backgroundColor: 'rgba(153, 102, 255, 0.5)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 2,
    }]
  };

  // Data for Nitrous Oxide Emissions
  const nitrousOxideData = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [{
      label: 'Nitrous Oxide Emissions',
      data: [45, 42, 35, 38, 36],
      backgroundColor: 'rgba(255, 159, 64, 0.5)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 2,
    }]
  };

  // Data for Electricity Usage and Costs
  const electricityData = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: 'Usage (MWh)',
        data: [12000, 11500, 9000, 10000, 9500],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        yAxisID: 'y',
      },
      {
        label: 'Cost ($K)',
        data: [960, 920, 720, 850, 855],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        yAxisID: 'y1',
      }
    ]
  };

  // Data for Total Emissions Distribution
  const emissionsDistributionData = {
    labels: ['Transportation', 'Purchased Electricity', 'Natural Gas', 'Agriculture', 'Solid Waste'],
    datasets: [{
      data: [61.63, 29.25, 9.06, 0.04, 0.03],
      backgroundColor: [
        'rgba(128, 0, 0, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(100, 150, 100, 0.8)',
        'rgba(150, 150, 150, 0.8)',
      ],
    }]
  };

  const baseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          boxWidth: 12,
          padding: 8,
          font: {
            size: 11
          }
        }
      },
    },
  };

  const co2Options = {
    ...baseOptions,
    plugins: {
      ...baseOptions.plugins,
      title: {
        display: true,
        text: 'CO₂ Emissions Over Time (Metric Tons)',
        font: {
          size: 14
        },
        padding: 10
      },
    },
    scales: {
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Metric Tons CO₂',
          font: {
            size: 11
          }
        },
        ticks: {
          font: {
            size: 10
          }
        }
      },
      x: {
        ticks: {
          font: {
            size: 10
          }
        }
      }
    },
  };

  const methaneOptions = {
    ...baseOptions,
    plugins: {
      ...baseOptions.plugins,
      title: {
        display: true,
        text: 'Methane Emissions Over Time',
        font: {
          size: 14
        },
        padding: 10
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Metric Tons CH₄',
          font: {
            size: 11
          }
        },
        ticks: {
          font: {
            size: 10
          }
        }
      },
      x: {
        ticks: {
          font: {
            size: 10
          }
        }
      }
    },
  };

  const nitrousOptions = {
    ...baseOptions,
    plugins: {
      ...baseOptions.plugins,
      title: {
        display: true,
        text: 'Nitrous Oxide Emissions Over Time',
        font: {
          size: 14
        },
        padding: 10
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Metric Tons N₂O',
          font: {
            size: 11
          }
        },
        ticks: {
          font: {
            size: 10
          }
        }
      },
      x: {
        ticks: {
          font: {
            size: 10
          }
        }
      }
    },
  };

  const electricityOptions = {
    ...baseOptions,
    plugins: {
      ...baseOptions.plugins,
      title: {
        display: true,
        text: 'Electricity Usage and Costs',
        font: {
          size: 14
        },
        padding: 10
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        title: {
          display: true,
          text: 'Usage (MWh)',
          font: {
            size: 11
          }
        },
        ticks: {
          font: {
            size: 10
          }
        }
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        title: {
          display: true,
          text: 'Cost ($K)',
          font: {
            size: 11
          }
        },
        ticks: {
          font: {
            size: 10
          }
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        ticks: {
          font: {
            size: 10
          }
        }
      }
    },
  };

  const pieOptions = {
    ...baseOptions,
    plugins: {
      ...baseOptions.plugins,
      title: {
        display: true,
        text: 'Distribution of Total Emissions (CO₂ Equivalent)',
        font: {
          size: 14
        },
        padding: 10
      },
      legend: {
        position: 'right' as const,
        labels: {
          boxWidth: 12,
          padding: 6,
          font: {
            size: 10
          }
        }
      },
    },
  };

  return (
    <section className="emissions-data">
      <h2>Campus Emissions Analysis</h2>
      <p className="section-intro">
        Our comprehensive emissions tracking helps us understand our environmental impact 
        and guides our sustainability efforts. The data shows trends across different types
        of emissions and their sources, helping us target our reduction strategies effectively.
      </p>

      <div className="charts-grid">
        <div className="chart-wrapper wide">
          <Line options={co2Options} data={co2Data} />
        </div>
        
        <div className="chart-wrapper">
          <Line options={methaneOptions} data={methaneData} />
        </div>
        
        <div className="chart-wrapper">
          <Line options={nitrousOptions} data={nitrousOxideData} />
        </div>

        <div className="chart-wrapper wide">
          <Line options={electricityOptions} data={electricityData} />
        </div>
        
        <div className="chart-wrapper">
          <Pie options={pieOptions} data={emissionsDistributionData} />
        </div>
      </div>

      <div className="emissions-summary">
        <h3>Key Findings</h3>
        <ul>
          <li>Transportation remains our largest source of emissions at 61.63%</li>
          <li>Purchased electricity accounts for 29.25% of our carbon footprint</li>
          <li>Natural gas consumption contributes 9.06% to total emissions</li>
          <li>We've seen a general downward trend in electricity usage since 2018</li>
          <li>COVID-19 impact is visible in 2020 with significant drops across all categories</li>
          <li>Recent years show a gradual return to pre-pandemic levels with some improvements</li>
        </ul>
      </div>
    </section>
  );
};

export default EmissionsData; 