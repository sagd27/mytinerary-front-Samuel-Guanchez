import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { createUser } from "../../../store/action/actionRegister";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [countryData, setCountryData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [nameData, setNameData] = useState("");
  const [lastNameData, setLastNameData] = useState("");
  const [emailData, setEmailData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  const [photoData, setPhotoData] = useState("");

  const { loading, error, register } = useSelector(
    (state) => state.registerStore
  );

  useEffect(() => {
    if (register.user) {
      navigate("/home"); // Redirigir al home si el registro es exitoso
    }
  }, [register, navigate]);

  useEffect(() => {
    const infoCountry = async () => {
      try {
        const response = await axios.get(
          "https://restfulcountries.com/api/v1/countries",
          {
            headers: {
              Authorization: "Bearer pXsmc8wFQROfSgzd2X14Lqkaw8fvZeM7aKVMZCx6",
            },
          }
        );
        setCountryData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    infoCountry();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createUser({
        name: nameData,
        lastName: lastNameData,
        email: emailData,
        password: passwordData,
        photo: photoData,
        country: selectedCountry,
      })
    );
  };

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 lg:p-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[400px] p-6 space-y-4 flex flex-col items-center justify-center bg-navbarfooter rounded-lg shadow-md"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-white">
          Sign Up
        </h2>

        <div className="w-full">
          <label className="block mb-1 text-sm md:text-base font-medium text-gray-300">
            Name:
          </label>
          <input
            type="text"
            onChange={(e) => setNameData(e.target.value)}
            required
            className="w-full px-4 py-2 text-white bg-[#011f26] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-fondo"
          />
        </div>

        <div className="w-full">
          <label className="block mb-1 text-sm md:text-base font-medium text-gray-300">
            Last Name:
          </label>
          <input
            type="text"
            onChange={(e) => setLastNameData(e.target.value)}
            required
            className="w-full px-4 py-2 text-white bg-[#011f26] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-fondo"
          />
        </div>

        <div className="w-full">
          <label className="block mb-1 text-sm md:text-base font-medium text-gray-300">
            Email:
          </label>
          <input
            type="email"
            onChange={(e) => setEmailData(e.target.value)}
            required
            className="w-full px-4 py-2 text-white bg-[#011f26] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-fondo"
          />
        </div>

        <div className="w-full">
          <label className="block mb-1 text-sm md:text-base font-medium text-gray-300">
            Password:
          </label>
          <input
            type="password"
            onChange={(e) => setPasswordData(e.target.value)}
            required
            className="w-full px-4 py-2 text-white bg-[#011f26] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-fondo"
          />
        </div>

        <div className="w-full">
          <label className="block mb-1 text-sm md:text-base font-medium text-gray-300">
            Photo:
          </label>
          <input
            type="text"
            onChange={(e) => setPhotoData(e.target.value)}
            required
            className="w-full px-4 py-2 text-white bg-[#011f26] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-fondo"
          />
        </div>

        <div className="w-full">
          <label className="block mb-1 text-sm md:text-base font-medium text-gray-300">
            Country:
          </label>
          <select
            className="w-full px-4 py-2 mt-1 text-sm text-gray-300 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            onChange={(e) => setSelectedCountry(e.target.value)}
            required
          >
            <option value="">Select a country</option>
            {countryData.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <button
          className="w-full py-2 mt-6 text-sm font-semibold text-white transition-colors bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          type="submit"
        >
          Register
        </button>

        {loading && <p className="text-center text-teal-400">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
      </form>
    </div>
  );
}
