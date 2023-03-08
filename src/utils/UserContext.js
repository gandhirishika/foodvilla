import { createContext } from "react";


const UserContext  = createContext({
   user:{
     name:"Hi Rishika!",
    password:"ABC",
},
});


export default UserContext;