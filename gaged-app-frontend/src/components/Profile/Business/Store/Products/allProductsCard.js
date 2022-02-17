import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "@material-ui/core";

const ProductsCard = ({ product, props }) => {
  return (
    <div className="flex space-y-5 lg:space-y-0 lg:flex-row justify-between mt-5 pb-2 px-2">
      <p></p>
      <p>{product.productTitle}</p>
      <p>{product.productUnitCount}</p>
      <p>{product.price}</p>
      <Fragment>
        <Link to={`/products/${props.params.getValue(props.params.id, "id")}`}>
          <EditIcon />
        </Link>
        <Button
          onClick={() =>
            props.deleteProductHandler(
              props.params.getValue(props.params.id, "id")
            )
          }
        >
          <DeleteIcon />
        </Button>
      </Fragment>
    </div>
  );
};

export default ProductsCard;
