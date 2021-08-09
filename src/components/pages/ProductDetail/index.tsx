import { FC } from "react";
import { useParams } from "react-router";

const ProductDetail: FC = () => {
  const params = useParams<{ id: string }>();

  return <div>Hi, I'm Product {params.id}</div>;
};

export default ProductDetail;
