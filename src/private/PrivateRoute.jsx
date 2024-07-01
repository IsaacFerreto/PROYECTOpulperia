import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
    const [auten, setAuten] = useState(null);
    
    useEffect(() => {
        const local = sessionStorage.getItem("iniciada");
        if (local) {
            const parsedLocal = JSON.parse(local);
            const esAdmin = parsedLocal[1];
            console.log(esAdmin);
            setAuten(esAdmin);
        } else {
            setAuten(false);
        }
    }, []);

    return auten === null ? null : auten ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;