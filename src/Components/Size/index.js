import { Component } from "react";
import { Row, Col, Card, Collapse, Divider, Radio } from "antd";
import { CloseOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";
import { saveSize, getProductsByfilters } from "../../Redux/Product/Action";
import { connect } from "react-redux";

const { Panel } = Collapse;
class Size extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      sizeValue: "",
    };
  }
  collapseHandler = (value) => {
    if (value.length > 0) this.setState({ collapsed: true });
    else this.setState({ collapsed: false });
  };
  clearRangeHandler = (e) => {
    this.setState({ sizeValue: "" });
    if (this.state.sizeValue) {
      this.props.saveSize("");
      this.props.getProductsByfilters(
        this.props.currentCategory,
        this.props.currentColor,
        this.props.currentPriceRange,
        "",
        this.props.currentType,
        this.props.currentPage
      );
    }
  };

  handleSizeChange = ({ target: { value } }) => {
    this.props.saveSize(value);
    this.props.getProductsByfilters(
      this.props.currentCategory,
      this.props.currentColor,
      this.props.currentPriceRange,
      value,
      this.props.currentType,
      this.props.currentPage
    );
    this.setState({ sizeValue: value });
  };
  render() {
    const { sizeValue, collapsed } = this.state;
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
                  <Panel header={<div style={{ fontWeight: "bold" }}>Size</div>} key="1">
                    <Row gutter={24}>
                      <Col span={24} style={{ padding: 0 }}>
                        <Radio.Group
                          onChange={this.handleSizeChange}
                          value={sizeValue}
                          style={{ marginBottom: 8, width: "100%", display: "flex" }}
                        >
                          <Radio.Button
                            style={{
                              padding: "0 10px",
                              fontSize: "10px",
                              fontWeight: 600,
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "16.6%",
                            }}
                            value="XS"
                          >
                            XS
                          </Radio.Button>
                          <Radio.Button
                            style={{
                              padding: "0 10px",
                              fontSize: "10px",
                              fontWeight: 600,
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "16.6%",
                            }}
                            value="S"
                          >
                            S
                          </Radio.Button>
                          <Radio.Button
                            style={{
                              padding: "0 10px",
                              fontSize: "10px",
                              fontWeight: 600,
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "16.6%",
                            }}
                            value="M"
                          >
                            M
                          </Radio.Button>
                          <Radio.Button
                            style={{
                              padding: "0 10px",
                              fontSize: "10px",
                              fontWeight: 600,
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "16.6%",
                            }}
                            value="L"
                          >
                            L
                          </Radio.Button>
                          <Radio.Button
                            style={{
                              padding: "0 10px",
                              fontSize: "10px",
                              fontWeight: 600,
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "16.6%",
                            }}
                            value="XL"
                          >
                            XL
                          </Radio.Button>
                          <Radio.Button
                            style={{
                              padding: "0 10px",
                              fontSize: "10px",
                              fontWeight: 600,
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "16.6%",
                            }}
                            value="XXL"
                          >
                            XXL
                          </Radio.Button>
                        </Radio.Group>
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
    currentPriceRange: state.ProductReducer.currentPriceRange,
    currentColor: state.ProductReducer.currentColor,
    currentType: state.ProductReducer.currentType,
  };
};
const mapDispatchToProps = { getProductsByfilters, saveSize };

export default connect(mapStateToProps, mapDispatchToProps)(Size);
