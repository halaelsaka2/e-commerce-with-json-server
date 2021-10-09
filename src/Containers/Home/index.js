import { Layout } from "antd";
import Filter from "../../Components/Filter";
import Products from "../../Components/Products";
import Price from "../../Components/Price";
import ProductType from "../../Components/ProductType";
import Size from "../../Components/Size";
import ColorFilter from "../../Components/Color";
import { Component } from "react";
import { connect } from "react-redux";
import { getAll } from "../../Redux/Product/Action";
const { Content, Sider } = Layout;

class HomePage extends Component {
  componentDidMount = () => {
    if (this.props.allProductsWithFilter.length == 0) this.props.getAll();
  };
  render() {
    return (
      <>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          style={{ backgroundColor: "transparent" }}
          width={240}
        >
          <ProductType />
          <Price />
          <Size />
          <ColorFilter />
        </Sider>
        <Content style={{ margin: "0px 0px 0px 30px" }}>
          <Filter />
          <Products />
        </Content>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    allProductsWithFilter: state.ProductReducer.allProductsWithFilter,
  };
};
const mapDispatchToProps = { getAll };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
