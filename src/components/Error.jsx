
import { useRouteError } from "react-router-dom";

const Error = ( ) => {
    const err = useRouteError();
    return (
    <>
    <h1>Ooppssie</h1>
    <h3>It is an error ! Damn</h3>
    <h3>{err.status + ": " + err.statusText}</h3>
    </>);

};


export default Error;