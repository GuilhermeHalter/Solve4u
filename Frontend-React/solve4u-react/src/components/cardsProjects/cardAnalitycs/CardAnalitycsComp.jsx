import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import "../../../css/cardStyle/cardAnalitycs/CardAnalitycsComp.css";
import { useTheme } from "../../../assets/JavaScript/ThemeContext.jsx";

const getProjectsFromLocalStorage = () => {
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  const sectors = JSON.parse(localStorage.getItem("sectors")) || [];
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  return { projects, sectors, tasks };
};

const countTasksByStage = (projects, sectors, tasks) => {
  const taskCounts = {};

  projects.forEach((project) => {
    taskCounts[project.id] = {
      process: 0,
      checking: 0,
      finished: 0,
      pending: 0,
    };

    const projectSectors = sectors.filter(
      (sector) => sector.projectId === project.id
    );

    projectSectors.forEach((sector) => {
      const sectorTasks = tasks.filter(
        (task) => task.sectorId === sector.sectorId
      );

      sectorTasks.forEach((task) => {
        if (task.taskStage === "1") taskCounts[project.id].process += 1;
        if (task.taskStage === "2") taskCounts[project.id].checking += 1;
        if (task.taskStage === "3") taskCounts[project.id].finished += 1;
        if (task.taskStage === "4") taskCounts[project.id].pending += 1;
      });
    });
  });

  return taskCounts;
};

const CardAnalitycsComp = () => {
  const [chartsData, setChartsData] = useState([]);
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    const { projects, sectors, tasks } = getProjectsFromLocalStorage();
    const taskCounts = countTasksByStage(projects, sectors, tasks);

    const allChartData = projects.map((project) => {
      const counts = taskCounts[project.id];
      const chartData = [
        ["Stage", "Tasks", { role: "style" }],
        ["Process", Math.max(0, counts.process), "#F2E307"],
        ["Checking", Math.max(0, counts.checking), "#6328F5"],
        ["Finished", Math.max(0, counts.finished), "#46CC26"],
        ["Pending", Math.max(0, counts.pending), "#EA1711"],
      ];
      return { projectName: project.projectName, data: chartData };
    });

    setChartsData(allChartData);
  }, []);

  const chartOptions = {
    backgroundColor: isDarkTheme ? '#22263f' : '#ffffff',
    legend: { textStyle: { color: isDarkTheme ? '#ffffff' : '#000000' } },
    hAxis: { textStyle: { color: isDarkTheme ? '#ffffff' : '#000000' } },
    vAxis: { textStyle: { color: isDarkTheme ? '#ffffff' : '#000000' } },
    titleTextStyle: { color: isDarkTheme ? '#ffffff' : '#000000' },
  };

  return (
    <div className="cardAnalitycs">
      {chartsData.map((chart, index) => (
        <div className={`conteinerCardAnalitycs ${isDarkTheme ? 'dark' : 'light'}`} key={index}>
          <h2 className={`titleAnalitycs ${isDarkTheme ? 'dark' : 'light'}`}>{chart.projectName}</h2>
          <Chart
            className={`chartAnalitycs ${isDarkTheme ? 'dark' : 'light'}`}
            chartType="ColumnChart"
            width="100%"
            height="200px"
            data={chart.data}
            options={chartOptions}
          />
        </div>
      ))}
    </div>
  );
};

export default CardAnalitycsComp;
