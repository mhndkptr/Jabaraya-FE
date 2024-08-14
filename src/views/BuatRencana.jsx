import iconLocation from "../assets/icons/icon-location.svg";
import React, { useEffect, useState } from "react";
import Navbar from "./komponen/navbar";
import tropical from "../assets/img-beranda/tropica2.png";
import AddDestinationModal from "../components/AddDestinationModal";
import AddStartLocationModal from "../components/AddStartLocationModal";
import axiosClient from "../api/axios/axios";

export default function BuatRencana() {
  const [destinations, setDestinations] = useState([]);
  const [startLocation, setStartLocation] = useState({});

  const [name, setName] = useState("");
  const [isModalStartLocationOpen, setIsModalStartLocationOpen] = useState(false);
  const [isModalDestinationOpen, setIsModalDestinationOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCloseModalDestinationOpen = () => {
    setIsModalDestinationOpen(false);
  };

  const handleCloseModalStartLocationOpen = () => {
    setIsModalStartLocationOpen(false);
  };

  const calculateTotalDistance = async (placeIds) => {
    if (placeIds.length < 2) return 0;

    let totalKm = 0;

    for (let i = 0; i < placeIds.length - 1; i++) {
      const originCoords = await getCoordinates(placeIds[i]);
      const destinationCoords = await getCoordinates(placeIds[i + 1]);
      const distance = calculateHaversineDistance(originCoords, destinationCoords);
      totalKm += distance;
    }

    return totalKm;
  };

  const getCoordinates = async (placeId) => {
    const service = new window.google.maps.places.PlacesService(document.createElement("div"));
    return new Promise((resolve, reject) => {
      service.getDetails({ placeId }, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          resolve({ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() });
        } else {
          reject(status);
        }
      });
    });
  };

  const calculateHaversineDistance = (coords1, coords2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371;
    const lat1 = toRad(coords1.lat);
    const lat2 = toRad(coords2.lat);
    const deltaLat = toRad(coords2.lat - coords1.lat);
    const deltaLng = toRad(coords2.lng - coords1.lng);

    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;
    return distance;
  };

  const calculateEstimation = () => {
    let totalEstimations = 0;

    destinations.map((destination) => {
      totalEstimations += destination.financialRecords.total;
    });

    return totalEstimations;
  };

  const handleReset = () => {
    setStartLocation({});
    setDestinations([]);
    setName("");
    setIsLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!startLocation.place_id) {
      return window.alert("Please add start location");
    }

    if (destinations.length == 0) {
      return window.alert("Please add at least one destination");
    }

    setIsLoading(true);

    const placeIds = [
      startLocation.place_id,
      ...destinations.map((destination) => {
        return destination.detailLocation.place_id;
      }),
    ];

    let travelPlan = {
      name: name,
      estimation: calculateEstimation(),
      totalDistance: 0,
      startLocation: startLocation,
      destinations: destinations,
      ...getEarliestAndLatestDates(),
    };

    const calculateDistances = async (placeIds) => {
      let distances = 0;
      try {
        distances = await calculateTotalDistance(placeIds);
      } catch (err) {
        window.alert("Failed to calculate total distances");
        setIsLoading(false);
        console.error(err);
      }
      travelPlan.totalDistance = distances;
    };

    const getDistances = async () => {
      await calculateDistances(placeIds);
    };

    getDistances().then(async () => {
      const payload = {
        name: travelPlan.name,
        estimation: travelPlan.estimation,
        totalDistance: travelPlan.totalDistance,
        startLocationName: travelPlan.startLocation.name,
        startLocationPlaceId: travelPlan.startLocation.place_id,
        startLocationAddress: travelPlan.startLocation.address,
        startLocationLat: travelPlan.startLocation.location.lat,
        startLocationLng: travelPlan.startLocation.location.lng,
        startAt: travelPlan.startAt,
        endAt: travelPlan.endAt,
      };

      await axiosClient
        .post("/travel-plans", payload)
        .then(async (res) => {
          if (res?.data && (res.data?.statusCode === 201 || res.data?.statusCode === 200)) {
            handleReset();
            travelPlan.destinations.map(async (destination, index) => {
              const destinationPayload = {
                startAt: destination.startAt,
                endAt: destination.endAt,
                vehicle: destination.vehicle,
                financialTransportation: destination.financialRecords.total === 0 ? 0 : destination.financialRecords.transportation,
                financialLodging: destination.financialRecords.total === 0 ? 0 : destination.financialRecords.lodging,
                financialConsumption: destination.financialRecords.total === 0 ? 0 : destination.financialRecords.consumption,
                financialEmergencyFund: destination.financialRecords.total === 0 ? 0 : destination.financialRecords.emergencyFund,
                financialSouvenir: destination.financialRecords.total === 0 ? 0 : destination.financialRecords.souvenir,
                financialTotal: destination.financialRecords.total,
                locationName: destination.detailLocation.name,
                locationPlaceId: destination.detailLocation.place_id,
                locationAddress: destination.detailLocation.address,
                locationLng: destination.detailLocation.location.lng,
                locationLat: destination.detailLocation.location.lat,
              };

              if (index === destinations.length - 1) {
                await axiosClient
                  .post(`/travel-plans/${res.data.data.id}/destinations`, destinationPayload)
                  .then((res) => {
                    if (!(res.data && (res.data.statusCode === 201 || res.data.statusCode === 200))) {
                      window.alert("Failed to upload destination");
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                    if (err.response && err.response.data && err.response.data.statusCode === 422) {
                      console.log(err.response.data);
                      window.alert(err.response.message);
                    } else {
                      console.error(err);
                      window.alert("Failed to create travel plan");
                    }
                  })
                  .finally(() => {
                    setIsLoading(false);
                    window.location.replace(`/perjalananfavorite/${res.data.data.id}`);
                  });
              } else {
                await axiosClient
                  .post(`/travel-plans/${res.data.data.id}/destinations`, destinationPayload)
                  .then((res) => {
                    if (!(res.data && (res.data.statusCode === 201 || res.data.statusCode === 200))) {
                      window.alert("Failed to upload destination");
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                    if (err.response && err.response.data && err.response.data.statusCode === 422) {
                      console.log(err.response.data);
                      window.alert(err.response.message);
                    } else {
                      console.error(err);
                      window.alert("Failed to create travel plan");
                    }
                  });
              }
            });
          } else {
            window.alert("Something went wrong!");
          }
        })
        .catch((err) => {
          if (err.response && err.response.data && err.response.data.statusCode === 422) {
            console.log(err.response.data.errors);
            window.alert(err.response.message);
          } else {
            console.error(err);
            window.alert("Failed to create travel plan");
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    });
  };

  const handleAddDestinationSubmit = (e, data) => {
    e.preventDefault();
    setIsModalDestinationOpen(false);
    setDestinations(destinations.length > 0 ? [...destinations, data] : [data]);
  };

  const handleAddStartSubmit = (e, data) => {
    e.preventDefault();
    setStartLocation(data);
    setIsModalStartLocationOpen(false);
  };

  const getEarliestAndLatestDates = () => {
    let destinationsCopy = destinations;
    return destinationsCopy.reduce(
      (acc, current) => {
        if (current.startAt < acc.startAt) {
          acc.startAt = current.startAt;
        }
        if (current.endAt > acc.endAt) {
          acc.endAt = current.endAt;
        }
        return acc;
      },
      {
        startAt: new Date(destinationsCopy[0].startAt),
        endAt: new Date(destinationsCopy[0].endAt),
      }
    );
  };

  return (
    <section className="w-full min-h-screen flex justify-center md:items-center md:px-0 pb-20 pt-24 px-4 border">
      <div className="flex flex-col items-center mt-5 md:mt-0 w-full">
        <div className="w-full text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Buat rencana wisatamu</h1>
          <p className="text-xl ">Buat lebih dari satu rencana untuk pengalaman maksimal</p>
        </div>

        <div className="md:w-[700px] w-full jbDropShadow rounded-xl py-5 px-5">
          <div className="flex justify-between items-center">
            <h1 className=" text-[1.2rem] md:text-[1.7rem] font-bold text-black">Buat Rencana jalan-jalan yuk!</h1>
            <button className="flex justify-center items-center p-2 rounded-md jbDropShadow hover:bg-slate-50" type="button" onClick={handleReset}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <form id="create-plan-travel-form" className="mt-7 flex items-center flex-1 gap-4 jbDropShadow rounded-md md:rounded-lg py-1 px-3 md:px-5 md:py-2" method="post" onSubmit={(e) => handleSubmit(e)}>
            <img src={tropical} alt="Tropical" className="w-[45px] h-[30px] border-r border-black pr-4 " />
            <input type="text" className="md:text-xl outline-none border-none focus:outline-none focus:border-none focus:ring-0 w-full" placeholder="Nama Perjalanan" value={name} onChange={(e) => setName(e.target.value)} required />
          </form>

          <div>
            {startLocation && startLocation.place_id && (
              <div className="mt-5 flex items-center flex-1 gap-4 jbDropShadow rounded-md md:rounded-lg py-1 px-3 md:px-5 md:py-2">
                <img src={iconLocation} alt="Location icon" className="w-[45px] h-[30px] border-r border-black pr-4 " />
                <input type="text" className="md:text-xl outline-none border-none focus:outline-none focus:border-none focus:ring-0" placeholder="Nama Perjalanan" value={startLocation.name} disabled />
              </div>
            )}

            {destinations &&
              destinations.length > 0 &&
              destinations.map((destination, index) => {
                return (
                  <div key={index} className="mt-5 flex items-center flex-1 gap-4 jbDropShadow rounded-md md:rounded-lg py-1 px-3 md:px-5 md:py-2">
                    <img src={iconLocation} alt="Location icon" className="w-[45px] h-[30px] border-r border-black pr-4 " />
                    <input type="text" className="md:text-xl outline-none border-none focus:outline-none focus:border-none focus:ring-0" placeholder="Nama Perjalanan" value={destination.detailLocation.name} disabled />
                  </div>
                );
              })}
          </div>

          {startLocation.place_id ? (
            <div className="mt-5 flex items-center flex-1 gap-4 justify-between jbDropShadow rounded-md md:rounded-lg py-3 px-3 md:px-5 md:py-4 transition hover:bg-slate-50 cursor-pointer" onClick={() => setIsModalDestinationOpen(true)}>
              <h2 className="md:text-xl">Buat Rencana Baru</h2>

              <div className="flex items-center justify-center">
                <span className="material-symbols-outlined">add_circle</span>
              </div>
            </div>
          ) : (
            <div className="mt-5 flex items-center flex-1 gap-4 justify-between  jbDropShadow rounded-md md:rounded-lg py-3 px-3 md:px-5 md:py-4 transition hover:bg-slate-50 cursor-pointer" onClick={() => setIsModalStartLocationOpen(true)}>
              <h2 className="md:text-xl">Pilih lokasi mulai perjalanan</h2>

              <div className="flex items-center justify-center">
                <span className="material-symbols-outlined">add_circle</span>
              </div>
            </div>
          )}

          <div className="w-full text-center">
            <button
              type="submit"
              form="create-plan-travel-form"
              className="p-3 text-white text-center  font-medium text-[1rem] md:hidden bg-jabarayaColors-700 hover:bg-jabarayaColors-800 rounded-xl w-[50%] mt-4 transition flex mx-auto justify-center items-center"
              disabled={isLoading}
            >
              {isLoading ? <div className="border-gray-300 lg:h-6 lg:w-6 w-4 h-4 my-1 mx-10 animate-spin rounded-full border-2 border-t-white" /> : "Buat Rencana"}
            </button>
          </div>
        </div>
        <button
          type="submit"
          form="create-plan-travel-form"
          className="py-3.5 mx-auto text-white font-medium text-[1.4rem] hidden md:block bg-jabarayaColors-700 hover:bg-jabarayaColors-800 rounded-2xl mt-5 transition px-20"
          disabled={isLoading}
        >
          {isLoading ? <div className="border-gray-300 lg:h-6 lg:w-6 w-5 h-5 my-1 mx-14 animate-spin rounded-full border-2 border-t-white" /> : "Buat Rencana"}
        </button>
      </div>
      {isModalDestinationOpen && <AddDestinationModal isOpen={isModalDestinationOpen} onClose={handleCloseModalDestinationOpen} handleSubmit={handleAddDestinationSubmit} />}
      {isModalStartLocationOpen && <AddStartLocationModal isOpen={isModalStartLocationOpen} onClose={handleCloseModalStartLocationOpen} handleSubmit={handleAddStartSubmit} />}
    </section>
  );
}
