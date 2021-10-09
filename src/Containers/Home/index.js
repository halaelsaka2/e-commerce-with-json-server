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
  constructor(props) {
    super(props);
    this.state = { broken: false };
  }
  componentDidMount = () => {
    if (this.props.allProductsWithFilter.length === 0) this.props.getAll();
  };
  render() {
    const customStyle = this.state.broken
      ? {
          position: "absolute",
          left: 0,
          top: 64,
        }
      : {};
    const { medium, small, xSmall, large } = this.props;
    return (
      <>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            this.setState({ broken });
          }}
          onCollapse={(collapsed, type) => {
          }}
          zeroWidthTriggerStyle={{
            color: "black",
            backgroundColor: "white",
            border: "1px solid black",
            right: "-35px",
          }}
          style={{ zIndex: 10, ...customStyle, backgroundColor: "white" }}
          width={240}
          theme="light"
        >
          <ProductType />
          <Price />
          <Size />
          <ColorFilter />
        </Sider>
        <Content style={{ margin: large ? "0px 0px 0px 10px" : "0px 0px 0px 30px" }}>
          <Filter medium={medium} small={small} xSmall={xSmall} />
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
