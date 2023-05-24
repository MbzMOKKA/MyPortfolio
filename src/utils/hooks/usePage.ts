//Imports
import { useLocation } from "react-router-dom";

//usePath custom hook
export default function usePage() {
    const location = useLocation();
    const currentPagename = location.pathname.split("/")[1];
    return { currentPagename };
}
