/* eslint-disable @next/next/no-img-element */
import { useSession, signIn, signOut } from "next-auth/react";

import styles from "../styles/Home.module.css";

export default function Home() {
   const { data: session } = useSession();

   if (!session) {
    return(
        <div>
          <button onClick={() => signIn("google")}>login in</button>
          <h1>dA</h1>
        </div>
    )
   }
  
   return (
     <div>
       <h1>Hello, {session.user.name}</h1>
       <img src={session.user.image} alt="" />
       <button onClick={() => signOut()}>login out</button>
     </div>
   );
}
