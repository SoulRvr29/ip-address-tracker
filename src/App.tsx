// import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { useState, useEffect } from "react";

// import L from "react-leaflet";

function App() {
  const [ipAddress, setIpAddress] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [ISP, setISP] = useState("");
  const [actualPosition, setActualPosition] = useState([34.04915, -118.09462]);

  const [newIpAddress, setNewIpAddress] = useState("");

  useEffect(() => {
    fetchHandler();
  }, [ipAddress]);

  const fetchHandler = async () => {
    // console.log(
    //   "https://geo.ipify.org/api/v2/country,city?apiKey=at_IRWCdlOHoiFuKZ2oUdTuZ9U9pzRcv&ipAddress=" +
    //     ipAddress
    // );

    const response = await fetch(
      "https://geo.ipify.org/api/v2/country,city?apiKey=at_IRWCdlOHoiFuKZ2oUdTuZ9U9pzRcv&ipAddress=" +
        ipAddress
    );
    const data = await response.json();

    console.log(data);

    updateStates(data);
  };

  const updateStates = (data: any) => {
    if (ipAddress == "") setIpAddress(data.ip);
    setLocation(data.location.country + ", " + data.location.region);
    setTimezone(data.location.timezone);
    setISP(data.isp);
    setActualPosition([data.location.lat, data.location.lng]);
  };

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
          center={[actualPosition[0], actualPosition[1]]}
          zoom={15}
          scrollWheelZoom={true}
          zoomControl={false}
          className="map max-w-[1440px] w-screen z-0 "
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[actualPosition[0], actualPosition[1]]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
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
            setIpAddress(newIpAddress);

            fetchHandler();

            console.log(newIpAddress);
            console.log(ipAddress);
          }}
        >
          <div className="flex max-sm:w-screen max-sm:px-8">
            <input
              className="p-4 px-6 rounded-l-2xl w-[500px] max-sm:w-full cursor-pointer focus:outline-none"
              type="text"
              name="address"
              id="address"
              placeholder="Search for any IP address or domain"
              onChange={(e) => setNewIpAddress(e.target.value)}
              onBlur={(e) => (e.target.value = "")}
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
