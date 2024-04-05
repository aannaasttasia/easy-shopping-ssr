import { ProductsList } from "@/components/ProductsList/ProductsList";
import RootLayout from "./layout";
import { getData } from "@/api/getProducts";
import { ProductType } from "@/components/Product/Product";

export const getServerSideProps = async () => {
  const products = await getData();
  console.log("HERE", products);
  return {props: {products}} ;
};

export default function Home({products}: {products : ProductType[]}) {
  return (
    <RootLayout>
      <ProductsList products={products} />
    </RootLayout>
  );
}
