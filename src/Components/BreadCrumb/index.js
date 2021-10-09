import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

const BreadCrumb = (props) => {
  const { small, xSmall } = props;
  return (
    <Breadcrumb style={{ marginBottom: "2rem" }}>
      <Breadcrumb.Item href="">
        <HomeOutlined />
      </Breadcrumb.Item>
      <Breadcrumb.Item style={{ color: "gray", fontSize: small || xSmall ? "smaller" : "" }}>
        All Products
      </Breadcrumb.Item>
      {Object.keys(props.categoryById).length > 0 ? (
        <Breadcrumb.Item style={{ color: "gray", fontSize: small || xSmall ? "smaller" : "" }}>
          {props.categoryById.name}
        </Breadcrumb.Item>
      ) : (
        ""
      )}
      {Object.keys(props.productById).length > 0 ? (
        <Breadcrumb.Item style={{ color: "gray", fontSize: small || xSmall ? "smaller" : "" }}>
          {props.productById.type}
        </Breadcrumb.Item>
      ) : (
        ""
      )}
    </Breadcrumb>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    categoryById: state.CategoryReducer.categoryById,
    productById: state.ProductReducer.productById,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BreadCrumb);
