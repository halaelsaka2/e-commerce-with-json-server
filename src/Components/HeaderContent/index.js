import { Component } from "react";
import { Row, Col, Menu } from "antd";
import { UserOutlined, ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { saveCategoryId, getCategoryById } from "../../Redux/Category/Action";
import { getProductsByfilters, getProductById } from "../../Redux/Product/Action";
import { withRouter } from "react-router";
class HeaderContent extends Component {
  categoryHandler = (e) => {
    this.props.getCategoryById(e.key);
    this.props.saveCategoryId(e.key);
    this.props.getProductsByfilters(
      e.key,
      this.props.currentColor,
      this.props.currentPriceRange,
      this.props.currentSize,
      this.props.currentType,
      this.props.currentPage
    );
    if (this.props.location.pathname !== "/home") {
      this.props.history.push("/home");
    }
  };
  render() {
    return (
      <Row justify="space-around">
        <Col span={6}>
          <img />
        </Col>
        <Col span={8} push={3}>
          <Menu
            onClick={this.categoryHandler}
            mode="horizontal"
            style={{ border: "none", backgroundColor: "transparent", fontWeight: "bold" }}
          >
            {this.props.allCategories.map((category) => (
              <Menu.Item key={category.id}>{category.name}</Menu.Item>
            ))}
          </Menu>
        </Col>
        <Col span={10}>
          <Row justify="end">
            <Col span={3}>
              <SearchOutlined style={{ fontSize: "18px" }} />
            </Col>
            <Col span={3}>
              <ShoppingCartOutlined style={{ fontSize: "18px" }} />
            </Col>
            <Col span={3}>
              <UserOutlined style={{ fontSize: "18px" }} />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    allCategories: state.CategoryReducer.allCategories,
    currentColor: state.ProductReducer.currentColor,
    currentPage: state.ProductReducer.currentPage,
    currentPriceRange: state.ProductReducer.currentPriceRange,
    currentSize: state.ProductReducer.currentSize,
    currentType: state.ProductReducer.currentType,
  };
};
const mapDispatchToProps = { saveCategoryId, getProductsByfilters, getProductById, getCategoryById };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContent));
