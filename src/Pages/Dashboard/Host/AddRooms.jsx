import { useState } from "react";
import AddRoomForm from "../../../Components/Form/AddRoomForm";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../api/utils";

export default function AddRooms() {
  const { user } = useAuth();
  const [imagePreviews, setImagePreviews] = useState();
  const [imageText, setImageText] = useState("upload image");
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
  // TODO
  // Swal.fire({
  //   title: "Drag me!",
  //   icon: "success",
  //   draggable: true,
  // });
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
    const to = dates.endDate;
    const from = dates.startDate;
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };
    try {
      const image_url = await imageUpload(image);
      const roomData = {
        location,
        category,
        title,
        to,
        from,
        price,
        total_guest,
        bedrooms,
        host,
        image: image_url,
      };
      console.log(roomData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Add rooms page</h1>
      <div className="flex items-center justify-center ">
        {imagePreviews && <img src={imagePreviews} className="w-16 h-16" />}
      </div>
      <AddRoomForm
        dates={dates}
        handledates={handledates}
        handleFormSubmit={handleFormSubmit}
        setImagePreviews={setImagePreviews}
      ></AddRoomForm>
    </div>
  );
}
