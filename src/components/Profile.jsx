import {useState} from 'react'
const Profile = (props) => {
    const[counter,setCounter]=useState(0);
    const[counter2,setCounter2]=useState(0);
    return (
        <>
        <h1>Profile Functional Component</h1>
        <h1>{props.name}</h1>
        <h1>{counter}</h1>
        <h1>{counter2}</h1>
        <button onClick={()=>{setCounter(1)}}>Function</button>
        </>
    );
};
export default Profile;