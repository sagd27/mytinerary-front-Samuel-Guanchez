import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../../../store/action/actionAuth";



const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const authStore = useSelector((state) => state.authStore);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  const loginWithGoogle = () => {
    window.location.href = "http://localhost:8080/api/auth/signin/google"
  }


  const loading = authStore.loading;
  const error = authStore.error;

  return (
    <>
<div className="flex flex-col items-center p-4 sm:p-6 md:p-8 lg:p-12">
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[400px] p-6 space-y-4 flex flex-col items-center justify-center bg-navbarfooter rounded-lg shadow-md"
  >
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-white">
      Sign In
    </h2>
    <div className="w-full">
      <label className="block mb-1 text-sm md:text-base font-medium text-gray-300">
        Email:
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full px-4 py-2 text-white bg-[#011f26] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-fondo"
      />
    </div>
    <button
      type="submit"
      className="w-2/3 py-1.5 font-bold text-white bg-blue-600 rounded hover:bg-fondo hover:text-navbarfooter focus:outline-none"
    >
      Sign In
    </button>

    {loading && <p className="text-center text-teal-400">Loading...</p>}
    {error && <p className="text-center text-red-500">{error}</p>}
  </form>

  <button
    type="button"
    className="mt-4 flex items-center    justify-center w-1/2 md:w-1/5 py-1.5 font-bold text-white bg-navbarfooter border border-gray-300 rounded hover:bg-gray-100 hover:text-navbarfooter focus:outline-none focus:ring-2 focus:ring-gray-200"
    onClick={() => loginWithGoogle()}
  >
    <img
      src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
      alt="Google logo"
      className="w-5 h-5 mr-2"
    />
    Continue with Google
  </button>
</div>


    </>
  );
};

export default LoginForm;
