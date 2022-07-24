import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 839,
    title: "Leonardo Da Vinci",
    author: "By Walter Issacson",
  },
  {
    id: "p2",
    price: 270,
    title: "Wings of Fire",
    author: "By APJ Abdul Kalam",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            author={product.author}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
