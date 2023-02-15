import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { hotelsCollection } from "../lib/controller";
import { Hotel } from "../Types/Hotel";
import { HotelInformation} from "./HotelInformation";



export function Card() 
{
    // Import hotel data from firebase in real time.
    /*Document>> Data>> Value>> mapValue>> feilds to check hotel attributes*/ 
    useEffect(
      () =>
        onSnapshot(hotelsCollection, (snapshot) => {
          setHotels(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            })
          );
        }),
      []
    );
    const [hotels, setHotels] = useState<Hotel[]>([]);
    return (
      <div>       
        {hotels.map((hotel) => (<HotelInformation key={hotel.id} hotel={hotel} />))}   
      </div>
    );
}