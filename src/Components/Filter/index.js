import { Component } from "react";
import { Col, Row, Select } from "antd";
import { connect } from "react-redux";

class Filter extends Component {
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
                  Show Products:
                </div>
                <Select
                  className="custom-selector"
                  size={small || xSmall ? "small" : "middle"}
                  style={{ width: medium || small || xSmall ? "40%" : "25%" }}
                >
                  <Select.Option>10</Select.Option>
                  <Select.Option>20</Select.Option>
                  <Select.Option>30</Select.Option>
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
                  style={{ width: medium || small || xSmall ? "60%" : "50%" }}
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
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
