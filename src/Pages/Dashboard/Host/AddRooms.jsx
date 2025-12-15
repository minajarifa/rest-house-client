import { useState } from "react";
import AddRoomForm from "../../../Components/Form/AddRoomForm";

export default function AddRooms() {
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: null,
    key: "selection",
  });
  // date range handler
  const handledates = (range) => {
    console.log(range);
    setDates(range.selection);
  };
  return (
    <div>
      <h1>add room page...</h1>
      <AddRoomForm dates={dates} handledates={handledates}></AddRoomForm>
    </div>
  );
}
