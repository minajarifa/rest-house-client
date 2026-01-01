import { useState } from "react";
import AddRoomForm from "../../../Components/Form/AddRoomForm";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../api/utils";
import { Helmet } from "react-helmet-async";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

export default function AddRooms() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
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
      // post request to server
      const { mutateAsync } = useMutation({
        mutationFn: async (roomData) => {
          const { data } = await axiosSecure.post(`/room`,roomData);
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  //TODO handle image change
  const handleImage = (image) => {
    setImagePreviews(URL.createObjectURL(image));
    setImageText(image.name);
  };
  return (
    <>
      <Helmet>
        <title>rest-house || AddRooms</title>
      </Helmet>
      
      <AddRoomForm
        dates={dates}
        handledates={handledates}
        handleFormSubmit={handleFormSubmit}
        setImagePreviews={setImagePreviews}
        imagePreviews={imagePreviews}
        handleImage={handleImage}
        imageText={imageText}
      ></AddRoomForm>
    </>
  );
}
