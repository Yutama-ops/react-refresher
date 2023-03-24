import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Sushi Roll'
          price={4}
          description='Best sushi roll'
        />
        <ProductItem
          title='Ramen'
          price={13.5}
          description='tonkotsu ramen with a rich soupbase'
        />
        <ProductItem
          title='Gyoza'
          price={13.5}
          description='4 piece handmade gyoza'
        />
        <ProductItem
          title='Takoyaki'
          price={13.5}
          description='4 piece handmade takoyaki'
        />
      </ul>
    </section>
  );
};

export default Products;
