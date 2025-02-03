const Product = (props) => {
  return (
    <div className="product">
      <h1>{props.name}</h1>
      <p1>{props.describtion}</p1>
      <img src="{props.image}" alt="{props.namek}" />
    </div>
  );
};
export default Product;
