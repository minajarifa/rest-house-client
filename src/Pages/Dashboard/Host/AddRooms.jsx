import { useState } from "react";
import AddRoomForm from "../../../Components/Form/AddRoomForm";

export default function AddRooms() {
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: null,
    key: "selection",
  });
  // date range handler
  const handledates = (item) => {
    setDates(item.selection);
    console.log("item",item);
  };
  // handle form
  const handleFormSubmit=async(e)=>{

  }
  return (
    <div>
      <AddRoomForm dates={dates} handledates={handledates} handleFormSubmit={handleFormSubmit}></AddRoomForm>
    </div>
  );
}