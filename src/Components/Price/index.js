import { Component } from "react";
import { Row, Col, Slider, Card, Collapse, Divider } from "antd";
import { CloseOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";
import { savePriceRange, getProductsByfilters } from "../../Redux/Product/Action";
import { connect } from "react-redux";

const { Panel } = Collapse;

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeValue: [],
      collapsed: false,
    };
  }

  rangePriceHandler = (value, l) => {
    this.setState({ rangeValue: value });
  };
  collapseHandler = (value) => {
    if (value.length > 0) this.setState({ collapsed: true });
    else this.setState({ collapsed: false });
  };
  afterChangeRangePriceHandler = (values, l) => {
    this.props.savePriceRange(values);
    this.props.getProductsByfilters(
      this.props.currentCategory,
      this.props.currentColor,
      values,
      this.props.currentSize,
      this.props.currentType,
      this.props.currentPage
    );
  };
  clearRangeHandler = (e) => {
    this.setState({ rangeValue: [] });
    if (this.state.rangeValue.length > 0) {
      this.props.savePriceRange([]);
      this.props.getProductsByfilters(
        this.props.currentCategory,
        this.props.currentColor,
        [],
        this.props.currentSize,
      this.props.currentType,
      this.props.currentPage
      );
    }
  };
  render() {
    const { collapsed, rangeValue } = this.state;
    return (
      <Row gutter={{ lg: 24, md: 20, sm: 16, xs: 16 }} style={{ marginBottom: "2rem" }}>
        <Col lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{ width: "100%", borderColor: "lightgray" }}
            bodyStyle={{ padding: collapsed ? "13px 13px 0px 13px" : "13px 13px 13px 13px" }}
          >
            <Row gutter={{ lg: 24, md: 20, sm: 16, xs: 16 }}>
              <Col lg={24} md={24} sm={24} xs={24}>
                <Collapse
                  defaultActiveKey={["1"]}
                  ghost
                  style={{ padding: 0, color: "red" }}
                  expandIconPosition="right"
                  onChange={this.collapseHandler}
                  expandIcon={() => (collapsed ? <UpOutlined /> : <DownOutlined />)}
                  className="custom-collapse"
                >
                  <Panel header={<div style={{ fontWeight: "bold" }}>Price Range</div>} key="1">
                    <Row gutter={24}>
                      <Col span={24}>
                        <Slider
                          style={{ width: "100%" }}
                          max={1000}
                          range={{ draggableTrack: true }}
                          value={rangeValue}
                          onChange={this.rangePriceHandler}
                          onAfterChange={this.afterChangeRangePriceHandler}
                        />{" "}
                      </Col>
                    </Row>
                    <Divider />
                    <Row style={{ cursor: "pointer" }}>
                      <Col>
                        <CloseOutlined onMouseUp={this.clearRangeHandler} />
                      </Col>
                      <Col>
                        <h4 onMouseUp={this.clearRangeHandler}>Clear</h4>
                      </Col>
                    </Row>
                  </Panel>
                </Collapse>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    currentCategory: state.CategoryReducer.currentCategory,
    currentPage: state.ProductReducer.currentPage,
    currentColor: state.ProductReducer.currentColor,
    currentSize: state.ProductReducer.currentSize,
    currentType: state.ProductReducer.currentType,
  };
};
const mapDispatchToProps = { getProductsByfilters, savePriceRange };

export default connect(mapStateToProps, mapDispatchToProps)(Price);
