import Container from "../Shared/Container";
import { categories } from "./CategoriesData.js";
import CategoryBox from "./CategoryBox.jsx";

const Categories = () => {
  return (
    <Container>
      <div className="flex items-center justify-between pt-4 overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox key={item.label} label={item.label} icon={item.icon} />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
