// import Button from "../../Components/Shared/Button/Button"

import Categories from "../../Components/Categories/Categories";
import Rooms from "../../Components/Home/Rooms";
import { Helmet } from "react-helmet-async";
export default function Home() {
  return (
    <div>
      <Helmet>
        <title>rest-house || Home</title>
      </Helmet>;
      {/* <Button></Button> */}
      {/* category section */}
      <Categories></Categories>
      {/* room sections */}
      <Rooms></Rooms>
    </div>
  );
}
