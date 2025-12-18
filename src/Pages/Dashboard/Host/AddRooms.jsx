import { useState } from "react";
import AddRoomForm from "../../../Components/Form/AddRoomForm";

export default function AddRooms() {
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: null,
    key: "selection",
  });
  // date range handler
  const handledates = (dates) => {
    setDates(dates.selection);
    console.log("item", dates);
  };
  // handle form
  const handleFormSubmit = async (e) => {
    e.preventDefault();
   const form = e.target;
  };
  return (
    <div>
      <AddRoomForm
        dates={dates}
        handledates={handledates}
        handleFormSubmit={handleFormSubmit}
      ></AddRoomForm>
    </div>
  );
}