import { Component } from "react";
import { Row, Col, Menu, Dropdown } from "antd";
import { UserOutlined, ShoppingCartOutlined, SearchOutlined, UnorderedListOutlined } from "@ant-design/icons";
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
      this.props.currentPage,
      this.props.pageSize,
      this.props.sortValue
    );
    if (this.props.location.pathname !== "/home") {
      this.props.history.push("/home");
    }
  };
  render() {
    const { small, xSmall, medium, large } = this.props;
    const overlay = (
      <Menu
        onClick={this.categoryHandler}
        mode="horizontal"
        style={{ border: "none", backgroundColor: "transparent", fontWeight: "bold" }}
      >
        {this.props.allCategories.map((category) => (
          <Menu.Item key={category.id}>{category.name}</Menu.Item>
        ))}
      </Menu>
    );
    return (
      <Row justify="space-around">
        <Col span={6} algin="left" pull={!small ? 0 : 3}>
          <img src="https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg" />
        </Col>
        {!large && (
          <Col span={8} push={3}>
            {overlay}
          </Col>
        )}
        <Col
          lg={{ span: 10 }}
          xl={{ span: 10 }}
          md={{ span: 12 }}
          sm={{ span: 12 }}
          xs={{ span: 12 }}
          algin="right"
          push={!small ? 0 : 3}
        >
          <Row justify="end">
            <Col lg={{ span: 3 }} xl={{ span: 3 }} md={{ span: 4 }} sm={{ span: 4 }} xs={{ span: 6 }}>
              <SearchOutlined style={{ fontSize: "18px" }} />
            </Col>
            <Col lg={{ span: 3 }} xl={{ span: 3 }} md={{ span: 4 }} sm={{ span: 4 }} xs={{ span: 6 }}>
              <ShoppingCartOutlined style={{ fontSize: "18px" }} />
            </Col>
            <Col lg={{ span: 3 }} xl={{ span: 3 }} md={{ span: 4 }} sm={{ span: 4 }} xs={{ span: 6 }}>
              {large ? (
                <Dropdown overlay={overlay} trigger={["click"]} placement="bottomRight" overlayStyle={{ width: "40%" }}>
                  <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                    <UnorderedListOutlined style={{ fontSize: "18px" }} />
                  </a>
                </Dropdown>
              ) : (
                <UserOutlined />
              )}
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
    pageSize: state.ProductReducer.pageSize,
    sortValue: state.ProductReducer.sortValue,
  };
};
const mapDispatchToProps = { saveCategoryId, getProductsByfilters, getProductById, getCategoryById };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContent));
