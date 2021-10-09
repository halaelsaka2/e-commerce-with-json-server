import { Component } from "react";
import { Col, Row, Select } from "antd";
import { connect } from "react-redux";
import { savePageSize, saveSortValue, getProductsByfilters } from "../../Redux/Product/Action";
class Filter extends Component {
  pageSizeHandler = (value) => {
    this.props.savePageSize(value);
    this.props.getProductsByfilters(
      this.props.currentCategory,
      this.props.currentColor,
      this.props.currentPriceRange,
      this.props.currentSize,
      this.props.currentType,
      this.props.currentPage,
      value,
      this.props.sortValue
    );
  };
  sortHandler = (value) => {
    this.props.saveSortValue(value);
    this.props.getProductsByfilters(
      this.props.currentCategory,
      this.props.currentColor,
      this.props.currentPriceRange,
      this.props.currentSize,
      this.props.currentType,
      this.props.currentPage,
      this.props.pageSize,
      value
    );
  };
  render() {
    const { medium, small, xSmall } = this.props;
    return (
      <Row gutter={[24, 24]} style={{ marginBottom: "2rem" }} justify="space-between">
        <Col
          lg={{ span: 4 }}
          xl={{ span: 4 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
          style={{ fontSize: small || xSmall ? "smaller" : "" }}
        >
          {Object.keys(this.props.categoryById).length > 0
            ? `${this.props.categoryById?.name}'s Tops (${this.props.productsCount})`
            : `All Products (${this.props.productsCount})`}
        </Col>
        <Col lg={{ span: 20 }} xl={{ span: 20 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
          <Row justify="end">
            <Col lg={{ span: 10 }} xl={{ span: 10 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                <div
                  style={{
                    fontWeight: small || xSmall ? 400 : 600,
                    fontSize: small || xSmall ? "smaller" : "",
                  }}
                >
                  Show:
                </div>
                <Select
                  className="custom-selector"
                  size={small || xSmall ? "small" : "middle"}
                  style={{ width: xSmall ? "48%" : medium || small ? "40%" : "25%" }}
                  onChange={this.pageSizeHandler}
                  defaultValue={10}
                >
                  <Select.Option key={10} value={10}>
                    10
                  </Select.Option>
                  <Select.Option key={20} value={20}>
                    20
                  </Select.Option>
                  <Select.Option key={30} value={30}>
                    30
                  </Select.Option>
                </Select>
              </div>
            </Col>
            <Col lg={{ span: 10 }} xl={{ span: 10 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                <div
                  style={{
                    fontWeight: small || xSmall ? 400 : 600,
                    fontSize: small || xSmall ? "smaller" : "",
                  }}
                >
                  Sort:
                </div>
                <Select
                  size={small || xSmall ? "small" : "middle"}
                  className="custom-selector"
                  style={{ width: xSmall ? "68%" : medium || small ? "60%" : "50%" }}
                  onChange={this.sortHandler}
                  defaultValue="new"
                >
                  <Select.Option key="new" value="new">
                    New
                  </Select.Option>
                  <Select.Option key="popular" value="popular">
                    Popular
                  </Select.Option>
                </Select>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    productsCount: state.ProductReducer.productsCount,
    categoryById: state.CategoryReducer.categoryById,

    currentCategory: state.CategoryReducer.currentCategory,
    currentPage: state.ProductReducer.currentPage,
    currentPriceRange: state.ProductReducer.currentPriceRange,
    currentSize: state.ProductReducer.currentSize,
    currentType: state.ProductReducer.currentType,
    currentColor: state.ProductReducer.currentColor,
    sortValue: state.ProductReducer.sortValue,
  };
};
const mapDispatchToProps = { savePageSize, getProductsByfilters, saveSortValue };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
