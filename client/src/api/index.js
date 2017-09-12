import axios from "axios";

export default {
    user: {
        register: (newUser) => axios.post("/api/register", { user: newUser }),
        login: (credentials) => axios.post("api/auth", { credentials })
    }
}
