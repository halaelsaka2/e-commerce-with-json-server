import { Component } from "react";
import { Col, Row, Select, Input } from "antd";
import { connect } from "react-redux";

class Filter extends Component {
  render() {
    return (
      <Row style={{ marginBottom: "2rem" }} justify="space-between">
        <Col span={4}>
          {Object.keys(this.props.categoryById).length > 0
            ? `${this.props.categoryById?.name}'s Tops (${this.props.productsCount})`
            : `All Products (${this.props.productsCount})`}
        </Col>
        <Col span={20} align="right">
          <Row justify="end">
            <Col span={10}>
              <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                <div style={{ fontWeight: "bold" }}>Show Products:</div>
                <Input style={{ borderRadius: "30px", width: "20%" }} />
              </div>
            </Col>

            <Col span={10} align="right">
              <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                <div style={{ fontWeight: "bold" }}>Sort:</div>
                <Select className="custom-selector" style={{ width: "50%" }}>
                  <Select.Option>New</Select.Option>
                  <Select.Option>Popular</Select.Option>
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
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
