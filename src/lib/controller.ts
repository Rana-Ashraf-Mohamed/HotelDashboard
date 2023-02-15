import {addDoc,collection,deleteDoc, doc,getFirestore,setDoc,} from "firebase/firestore";
import { NavigateFunction } from "react-router-dom";
import { Hotel } from "../Types/Hotel";
import { app } from "./firebase";

export const firestore = getFirestore(app);
export const hotelsCollection = collection(firestore, "Hotels");
export const updateHotel = async (id: string | undefined, docData: any) => 
{
    const getHotel = doc(firestore, `Hotels/${id}`);
    await setDoc(getHotel, docData, { merge: true });
};

export const addHotel = async (hotelData: Hotel) => 
{
    const newHotel = await addDoc(hotelsCollection, { ...hotelData });
};
  
export const deleteHotel = async (
    id: string | undefined,
    navigate: NavigateFunction
  ) => {
    const document = doc(firestore, `Hotels/${id}`);
    await deleteDoc(document);
    navigate("/");};