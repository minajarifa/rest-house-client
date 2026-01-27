import { useState } from "react";
import AddRoomForm from "../../../Components/Form/AddRoomForm";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../api/utils";
import { Helmet } from "react-helmet-async";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddRooms() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [imagePreviews, setImagePreviews] = useState();
  const [imageText, setImageText] = useState("upload image");
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  // date range handler
  const handledates = (dates) => {
    setDates(dates.selection);
  };
  const { mutateAsync } = useMutation({
    mutationFn: async (roomData) => {
      const { data } = await axiosSecure.post(`/room`, roomData);
      return data;
    },
    onSuccess: () => {
      console.log("data saved successfully");
      // TODO
      Swal.fire({
        title: "data saved successfully!",
        icon: "success",
        draggable: true,
      });
      navigate('/dashboard/my-listings')
      setLoading(false);
    },
    
  });

  // handle form
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
      await mutateAsync(roomData);
    } catch (error) {
       Swal.fire({
        title: `${error?.message}`,
        icon: "success",
        draggable: true,
      });
      console.log(error);
      setLoading(false);
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
        {/* <title>rest-house || AddRooms</title> */}
      </Helmet>
      <AddRoomForm
        dates={dates}
        handledates={handledates}
        handleFormSubmit={handleFormSubmit}
        setImagePreviews={setImagePreviews}
        imagePreviews={imagePreviews}
        handleImage={handleImage}
        imageText={imageText}
        loading={loading}
      ></AddRoomForm>
    </>
  );
}
