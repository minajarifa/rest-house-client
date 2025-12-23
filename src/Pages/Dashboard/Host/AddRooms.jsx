import { useState } from "react";
import AddRoomForm from "../../../Components/Form/AddRoomForm";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../api/utils";

export default function AddRooms() {
  const { user } = useAuth;
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
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const image = form.image.files[0];
    const price = form.price.value;
    const total_guest = form.total_guest.value;
    const bedrooms = form.bedrooms.value;
    const to = "";
    const from = "";
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };
    try {
      const image_url = await imageUpload(image);
      const formData={}
      // console.log(image_url);
    } catch (error) {
      console.log(error);
    }
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
