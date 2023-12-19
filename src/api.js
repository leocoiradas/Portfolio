let apiURL = "http://localhost:8000"

if(process.env.NODE_ENV === "production"){
    apiURL = import.meta.env.VITE_BACK_URL
}

export default apiURL