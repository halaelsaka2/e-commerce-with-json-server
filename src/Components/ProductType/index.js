import { Component } from "react";
import { Row, Col, Card, Checkbox, Collapse, Divider } from "antd";
import { UpOutlined, DownOutlined, CloseOutlined } from "@ant-design/icons";
import { saveProductType, getProductsByfilters } from "../../Redux/Product/Action";
import { connect } from "react-redux";
const { Panel } = Collapse;
const CheckboxGroup = Checkbox.Group;
const plainOptions = ["T-shirts", "Sweatshirts", "Tank Tops", "Dress shirts"];

class ProductType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      checkedList: [],
    };
  }

  onChange = (list) => {
    this.setState({ checkedList: list });
    this.props.saveProductType(list);
    this.props.getProductsByfilters(
      this.props.currentCategory,
      this.props.currentColor,
      this.props.currentPriceRange,
      this.props.currentSize,
      list,
      this.props.currentPage,
      this.props.pageSize,
      this.props.sortValue
    );
  };

  collapseHandler = (value) => {
    if (value.length > 0) this.setState({ collapsed: true });
    else this.setState({ collapsed: false });
  };

  clearRangeHandler = (e) => {
    this.setState({ checkedList: [] });
    if (this.state.checkedList.length > 0) {
      this.props.saveProductType([]);
      this.props.getProductsByfilters(
        this.props.currentCategory,
        this.props.currentColor,
        this.props.currentPriceRange,
        this.props.currentSize,
        [],
        this.props.currentPage,
        this.props.pageSize,
        this.props.sortValue
      );
    }
  };
  render() {
    const { collapsed } = this.state;
    return (
      <Row gutter={{ lg: 24, md: 20, sm: 16, xs: 16 }} style={{ marginBottom: "2rem" }}>
        <Col lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{ width: "100%", borderColor: "lightgray" }}
            bodyStyle={{ padding: collapsed ? "13px 13px 0px 13px" : "13px 13px 13px 13px" }}
          >
            <Row gutter={{ lg: 24, md: 20, sm: 16, xs: 16 }}>
              <Col lg={24} md={24} sm={24} xs={24} align="left">
                <Collapse
                  defaultActiveKey={["1"]}
                  ghost
                  style={{ padding: 0, color: "red" }}
                  expandIconPosition="right"
                  onChange={this.collapseHandler}
                  expandIcon={() => (collapsed ? <UpOutlined /> : <DownOutlined />)}
                  className="custom-collapse"
                >
                  <Panel header={<div style={{ fontWeight: "bold" }}>Product Types</div>} key="1">
                    <Row gutter={24}>
                      <Col span={24}>
                        <CheckboxGroup
                          style={{ display: "flex", flexDirection: "column" }}
                          options={plainOptions}
                          value={this.state.checkedList}
                          onChange={this.onChange}
                        />
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
    currentPriceRange: state.ProductReducer.currentPriceRange,
    pageSize: state.ProductReducer.pageSize,
    sortValue: state.ProductReducer.sortValue,
  };
};
const mapDispatchToProps = { getProductsByfilters, saveProductType };

export default connect(mapStateToProps, mapDispatchToProps)(ProductType);
