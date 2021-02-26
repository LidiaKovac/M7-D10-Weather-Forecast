import React, { useContext, useEffect, useState, forceUpdate } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styling/Dashboard.scss";
import "../../App.scss";
import moment from "moment";
import timestamp from 'unix-timestamp'
import { connect } from "react-redux";
import { ThemeContext, Themes } from "../../context/theme";
import Search from "../components/Search";
import Loader from "../components/Loader";
import Snow from '../../assets/snow.png'
import Cloud from '../../assets/cloud.png'
import Rain from '../../assets/rain.png'
import Sun from '../../assets/sun.png'
import Thunder from '../../assets/thunder.png'

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  get_coords: (lat, lon) =>
    dispatch({
      type: "GET_COORDS",
      payload: {
        lat: lat,
        lon: lon,
      },
    }),
  get_weather: (weather) =>
    dispatch({
      type: "GET_WEATHER",
      payload: weather,
    }),
});

const Dashboard = (props) => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [date, setDate] = useState();
  const [day, setDay] = useState(0);
  const [code, setCode] = useState(800);
  const [loading, setLoading] = useState(false);
  //const [weather, setWeather] = useState({});

  const fetchWeather = async () => {
    setLoading(true);
    let response = await fetch(
      `${process.env.REACT_APP_BE_URL}${props.city.city}`
    );
    let weather = await response.json();
    await props.get_weather(weather);


    setLoading(false);
  };
  useEffect(() => {
    fetchWeather();
    //console.log(weather, props.coords);
  }, [props.city]);
  useEffect(() => {
    //console.log(props)
    let now = moment();
    setDate(now);
    //console.log(date)
  }, []);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div
      className={
        theme === Themes.light ? "dash-wrap page-light" : "dash-wrap page-dark"
      }
    >
      <Search />
      {loading ? (
        <Loader />
      ) : (
          <div className="weather-wrap">
            <h1 className='cabin mb-3'>Weather in {capitalize(props.city.city)}:</h1>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              {props.weather.data.daily &&
                props.weather.data.daily.map((curr) => (

                  <>

                    <div
                      className={
                        curr &&
                        (curr.weather[0].id >= 200 && curr.weather[0].id < 300
                          ? "weather-inner-wrap m-2 thunder"
                          : curr.weather[0].id >= 300 && curr.weather[0].id < 400
                            ? "weather-inner-wrap m-2 drizzle"
                            : curr.weather[0].id >= 400 && curr.weather[0].id < 600
                              ? "weather-inner-wrap m-2 rain"
                              : curr.weather[0].id >= 600 && curr.weather[0].id < 700
                                ? "weather-inner-wrap m-2 snow"
                                : curr.weather[0].id === 800
                                  ? "weather-inner-wrap m-2 clear"
                                  : curr.weather[0].id > 800
                                    ? "weather-inner-wrap m-2 clouds"
                                    : "weather-inner-wrap m-2 rain")
                      }
                    >
                      {" "}
                      <img className='icon' src={curr &&
                        (curr.weather[0].id >= 200 && curr.weather[0].id < 300
                          ? Thunder
                          : curr.weather[0].id >= 300 && curr.weather[0].id < 400
                            ? Rain
                            : curr.weather[0].id >= 400 && curr.weather[0].id < 600
                              ? Rain
                              : curr.weather[0].id >= 600 && curr.weather[0].id < 700
                                ? Snow
                                : curr.weather[0].id === 800
                                  ? Sun
                                  : curr.weather[0].id > 800
                                    ? Cloud
                                    : Rain)} />
                      <div className="day cabin"> {moment(timestamp.toDate(curr.dt)).format('DD/MM')} </div>
                      {props.weather.data.daily &&
                        capitalize(
                          curr.weather[0].main
                        )}{" "}
                      <div className='temp cabin'>↓ {curr.temp.min}°  ↑ {curr.temp.max}°</div>
                    </div>


                  </>
                ))}

            </div>
            <h1 className='cabin m-5'>Today:</h1>
            <div className='d-flex flex-row flex-wrap justify-content-center'>
              {props.weather.data.hourly && props.weather.data.hourly.slice(0, 8).map((curr, index) => (

                <>
                  {console.log(curr.temp.min)}
                  <div
                    className={
                      curr &&
                      (curr.weather[0].id >= 200 && curr.weather[0].id < 300
                        ? "weather-inner-wrap m-2 thunder"
                        : curr.weather[0].id >= 300 && curr.weather[0].id < 400
                          ? "weather-inner-wrap m-2 drizzle"
                          : curr.weather[0].id >= 400 && curr.weather[0].id < 600
                            ? "weather-inner-wrap m-2 rain"
                            : curr.weather[0].id >= 600 && curr.weather[0].id < 700
                              ? "weather-inner-wrap m-2 snow"
                              : curr.weather[0].id === 800
                                ? "weather-inner-wrap m-2 clear"
                                : curr.weather[0].id > 800
                                  ? "weather-inner-wrap m-2 clouds"
                                  : "weather-inner-wrap m-2 rain")
                    }
                  >
                    {" "}
                    <img className='icon' src={curr &&
                      (curr.weather[0].id >= 200 && curr.weather[0].id < 300
                        ? Thunder
                        : curr.weather[0].id >= 300 && curr.weather[0].id < 400
                          ? Rain
                          : curr.weather[0].id >= 400 && curr.weather[0].id < 600
                            ? Rain
                            : curr.weather[0].id >= 600 && curr.weather[0].id < 700
                              ? Snow
                              : curr.weather[0].id === 800
                                ? Sun
                                : curr.weather[0].id > 800
                                  ? Cloud
                                  : Rain)} />
                    <div className="hour cabin">H.{moment(timestamp.toDate(curr.dt)).format('HH')} </div>
                    {props.weather.data.daily &&
                      capitalize(
                        curr.weather[0].main
                      )}{" "}
                    <div className='temp cabin'>{curr.temp}°</div>
                  </div>


                </>
              ))}

            </div>

          </div>
        )}
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
