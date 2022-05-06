import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/productActions";
import ProductCard from "../Cards/ProductCard";
import ProductGrid from "../styled/ProductGrid.styled";
import StyledProducts from "../styled/Products.styled";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const products = useSelector((state) => state.allProducts.products);

  useEffect(() => {
    if (products.length !== 0) {
      setLoading(false);
    }
  }, [products]);

  return (
    <StyledProducts>
      {!loading ? (
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </ProductGrid>
      ) : (
        <h2>LOADING</h2>
      )}
    </StyledProducts>
  );
};

export default Products;
