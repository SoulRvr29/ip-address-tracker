import { useState } from "react";

function App() {
  const [ipAddress, setIpAddress] = useState("8.8.8.8");
  const [location, setLocation] = useState("US, Ohio");
  const [timezone, setTimezone] = useState("-05:00");
  const [ISP, setISP] = useState("Google LLC");

  // var map = L.map("map").setView([51.505, -0.09], 13);

  // fetch(
  //   "https://geo.ipify.org/api/v2/country?apiKey=at_IRWCdlOHoiFuKZ2oUdTuZ9U9pzRcv&ipAddress=8.8.8.8"
  // )
  //   .then((response) => {
  //     if (response.ok) {
  //       return response.json();
  //     } else {
  //       alert("no data");
  //     }
  //   })

  //   .then((data) => {
  //     console.log(data);
  //     setIpAddress(data.ip);
  //     setLocation(data.location.country + ", " + data.location.region);
  //     setTimezone(data.location.timezone);
  //     setISP(data.isp);
  //   });

  // .catch((err) => {
  //     alert("Something went wrong!", err);
  // }
  // );
  return (
    <main className="relative max-w-[1440px] h-screen mx-auto flex flex-col items-center">
      <div className="absolute -z-10 h-full">
        <img
          className="h-72 object-cover"
          src="assets\pattern-bg-desktop.png"
          alt="background"
        />
        {/* <div id="map" className="h-48"></div> */}
        <section className="absolute top-0 -z-20 bg-gray-500 w-full h-full grid place-content-center text-fuchsia-100 text-xl">
          {" "}
          map{" "}
        </section>
      </div>
      <h1 className="text-white text-3xl text-center m-6 font-medium">
        {" "}
        IP Address Tracker
      </h1>
      <form
        className="my-8 grid justify-center w-full text-[18px]"
        onSubmit={(e) => {
          e.preventDefault();

          // console.log(e.target.elements[0].value);
        }}
      >
        <div className="flex max-sm:w-screen max-sm:px-8">
          <input
            className="p-4 px-6 rounded-l-2xl w-[500px] max-sm:w-full cursor-pointer focus:outline-none"
            type="text"
            name="address"
            id="address"
            placeholder="Search for any IP address or domain"
          />
          <button className="bg-black px-6 rounded-r-2xl hover:bg-veryDarkGray">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="3"
                d="M2 1l6 6-6 6"
              />
            </svg>
          </button>
        </div>
      </form>
      <section className="max-w-7xl w-full">
        <ul className="flex max-sm:text-center max-sm:flex-col bg-white rounded-2xl mx-8">
          <li className=" my-8 px-8 w-full ">
            <h2 className="font-bold text-xs text-darkGray tracking-widest">
              IP ADDRESS
            </h2>
            <div className="text-3xl font-medium">{ipAddress}</div>
          </li>
          <li className=" my-8 px-8 w-full max-sm:border-none border-l">
            <h2 className="font-bold text-xs text-darkGray tracking-widest">
              LOCATION
            </h2>
            <div className="text-3xl font-medium">{location}</div>
          </li>
          <li className=" my-8 px-8 w-full max-sm:border-none border-l">
            <h2 className="font-bold text-xs text-darkGray tracking-widest">
              TIMEZONE
            </h2>
            <div className="text-3xl font-medium">{timezone}</div>
          </li>
          <li className=" my-8 px-8 w-full max-sm:border-none border-l">
            <h2 className="font-bold text-xs text-darkGray tracking-widest">
              ISP
            </h2>
            <div className="text-3xl font-medium">{ISP}</div>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default App;
