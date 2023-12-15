// import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { MapContainer, TileLayer } from "react-leaflet";

import { useState } from "react";

function App() {
  const [ipAddress, _setIpAddress] = useState("192.212.174.101");
  const [location, _setLocation] = useState("Brooklyn, NY 10001");
  const [timezone, _setTimezone] = useState("UTC -05:00");
  const [ISP, _setISP] = useState("SpaceX Starlink");

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
      {/* background blured */}
      <div className="h-screen w-screen fixed -z-10 top-0 left-0 ">
        <img
          className="w-screen h-screen blur-md scale-110 brightness-75"
          src="assets\pattern-bg-desktop.png"
          alt="background"
        />
      </div>
      {/* background image and map */}
      <div className="h-full max-w-[1440px]">
        <img
          className="h-72 object-cover  border-x-2 border-veryDarkGray"
          src="assets\pattern-bg-desktop.png"
          alt="background"
        />
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          className="map max-w-[1440px] w-screen z-0 "
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>

      <div className="absolute ">
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
        <section className="max-w-6xl w-screen px-8 drop-shadow-xl">
          <ul className="flex max-w-6xl mx-auto max-sm:text-center max-sm:flex-col bg-white rounded-2xl">
            <li className=" my-8 px-8 w-full ">
              <h2 className="font-bold text-xs text-darkGray tracking-widest">
                IP ADDRESS
              </h2>
              <div className="text-2xl font-medium">{ipAddress}</div>
            </li>
            <li className=" my-8 px-8 w-full max-sm:border-none border-l">
              <h2 className="font-bold text-xs text-darkGray tracking-widest">
                LOCATION
              </h2>
              <div className="text-2xl font-medium">{location}</div>
            </li>
            <li className=" my-8 px-8 w-full max-sm:border-none border-l">
              <h2 className="font-bold text-xs text-darkGray tracking-widest">
                TIMEZONE
              </h2>
              <div className="text-2xl font-medium">{timezone}</div>
            </li>
            <li className=" my-8 px-8 w-full max-sm:border-none border-l">
              <h2 className="font-bold text-xs text-darkGray tracking-widest">
                ISP
              </h2>
              <div className="text-2xl font-medium">{ISP}</div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default App;
