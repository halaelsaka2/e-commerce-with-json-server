import { Component } from "react";
import { connect } from "react-redux";
import ProductInfo from "../../Components/ProductInfo";
import { getProductById } from "../../Redux/Product/Action";
class ViewProduct extends Component {
  componentDidMount = () => {
    this.props.getProductById(this.props.match.params.id);
  };
  render() {
    const { medium, small, xSmall, large } = this.props;
    return <ProductInfo medium={medium} large={large} small={small} xSmall={xSmall} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};
const mapDispatchToProps = { getProductById };

export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct);
