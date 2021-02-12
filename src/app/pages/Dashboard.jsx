import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styling/Dashboard.scss";
import "../../App.scss";
import { ThemeContext, Themes } from "../../context/theme";
import Search from "../components/Search";
const Dashboard = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [query, setQuery] =useState('')
  return (
    <div
      className={
        theme === Themes.light ? "dash-wrap page-light" : "dash-wrap page-dark"
      }
    >
      <Search/>
    </div>
  );
};
export default Dashboard;
