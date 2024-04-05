import { getCategories } from "@/api/getCategories";
import { CategoriesList } from "@/components/CategoriesList/CategoriesList";
import CategoriesLayout from "./layout";
import axios from "axios";
import { ProductType } from "@/components/Product/Product";

export const getServerSideProps = async () => {
  const categories = await getCategories();
  console.log("HERE", categories);
  
  const category = categories[0];
  console.log(category);
  const response = await axios.get(
    `https://dummyjson.com/products/category/${category}`
  );
  const productsDef = await response.data.products
  console.log(response.data.products);
  return { props: { categories, productsDef } };
};

export default function Categories({ categories,productsDef }: { categories: string[], productsDef: ProductType[] }) {
  return (
    <CategoriesLayout>
      <CategoriesList categories={categories} productsDef={productsDef}/>
    </CategoriesLayout>
  );
}
