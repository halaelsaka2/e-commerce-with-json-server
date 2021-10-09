import { Component } from "react";
import { connect } from "react-redux";
import ProductInfo from "../../Components/ProductInfo";
import { getProductById } from "../../Redux/Product/Action";
class ViewProduct extends Component {
  componentDidMount = () => {
    this.props.getProductById(this.props.match.params.id);
  };
  render() {
    return <ProductInfo />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};
const mapDispatchToProps = { getProductById };

export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct);
