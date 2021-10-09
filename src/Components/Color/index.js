import { Component } from "react";
import { Row, Col, Card, Collapse, Divider, Radio } from "antd";
import { CloseOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { saveColor, getProductsByfilters } from "../../Redux/Product/Action";
const { Panel } = Collapse;

class ColorFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      color: "",
    };
  }
  collapseHandler = (value) => {
    if (value.length > 0) this.setState({ collapsed: true });
    else this.setState({ collapsed: false });
  };
  clearColorHandler = (e) => {
    this.setState({ color: "" });
    if (this.state.color) {
      this.props.saveColor("");
      this.props.getProductsByfilters(
        this.props.currentCategory,
        "",
        this.props.currentPriceRange,
        this.props.currentSize,
        this.props.currentType,
        this.props.currentPage,
        this.props.pageSize,
        this.props.sortValue
      );
    }
  };

  handleColorChange = ({ target: { value } }) => {
    this.props.saveColor(value);
    this.props.getProductsByfilters(
      this.props.currentCategory,
      value,
      this.props.currentPriceRange,
      this.props.currentSize,
      this.props.currentType,
      this.props.currentPage,
      this.props.pageSize,
      this.props.sortValue
    );
    this.setState({ color: value });
  };
  render() {
    const { color, collapsed } = this.state;
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
                  <Panel header={<div style={{ fontWeight: "bold" }}>Color</div>} key="1">
                    <Row gutter={24}>
                      <Col span={24} style={{ padding: 0 }}>
                        <Radio.Group
                          onChange={this.handleColorChange}
                          value={color}
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
                            value="yellow"
                          >
                            <div style={{ backgroundColor: "yellow", width: "15px", height: "15px" }}></div>
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
                            value="red"
                          >
                            <div style={{ backgroundColor: "red", width: "15px", height: "15px" }}></div>
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
                            value="black"
                          >
                            <div style={{ backgroundColor: "black", width: "15px", height: "15px" }}></div>
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
                            value="brown"
                          >
                            <div style={{ backgroundColor: "brown", width: "15px", height: "15px" }}></div>
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
                            value="green"
                          >
                            <div style={{ backgroundColor: "green", width: "15px", height: "15px" }}></div>
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
                            value="blue"
                          >
                            <div style={{ backgroundColor: "blue", width: "15px", height: "15px" }}></div>
                          </Radio.Button>
                        </Radio.Group>
                      </Col>
                    </Row>
                    <Divider />
                    <Row style={{ cursor: "pointer" }}>
                      <Col>
                        <CloseOutlined onMouseUp={this.clearColorHandler} />
                      </Col>
                      <Col>
                        <h4 onMouseUp={this.clearColorHandler}>Clear</h4>
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
    currentSize: state.ProductReducer.currentSize,
    currentType: state.ProductReducer.currentType,
    pageSize: state.ProductReducer.pageSize,
    sortValue: state.ProductReducer.sortValue,
  };
};
const mapDispatchToProps = { getProductsByfilters, saveColor };

export default connect(mapStateToProps, mapDispatchToProps)(ColorFilter);
