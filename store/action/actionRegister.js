import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Acción asíncrona para crear un usuario
const createUser = createAsyncThunk("USER_CREATE", async ({name, lastName, email, password, photo, country, online, role}, { rejectWithValue }) => {
    try {
        // Creación del objeto de usuario
        const user = {
            name,
            lastName,
            email,
            password,
            photo,
            country,
            online: true,
        };


        // Hacer la solicitud POST para crear el usuario
        const response = await axios.post("http://localhost:8080/api/users/create", user);



        // Asegúrate de que el servidor devuelve la respuesta esperada
        return response.data;
    } catch (error) {
        // En caso de error, devolver el error con rejectWithValue
        console.error("Error en la creación del usuario:", error.response || error.message);
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
});

export { createUser };
