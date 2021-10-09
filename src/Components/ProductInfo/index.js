import { Component } from "react";
import { Row, Col, Card, Button, Select, Space, message } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

class ProductInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      currentImage: "",
    };
  }
  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (prevProps.productById !== this.props.productById) {
      this.setState({
        currentImage: Object.keys(this.props.productById).length > 0 ? this.props.productById?.images[0] : "",
      });
    }
  };

  handleImageHandler = (img) => {
    console.log(img);
    this.setState({ currentImage: img });
  };
  plusHandler = () => {
    if (this.state.count === this.props.productById?.quantity) {
      message.info("This Is Quantity Of Product");
    } else {
      this.setState({ count: this.state.count + 1 });
    }
  };
  minusHandler = () => {
    if (this.state.count > 1) this.setState({ count: this.state.count - 1 });
  };
  render() {
    const { count } = this.state;
    const { medium, small, xSmall } = this.props;

    return (
      <Row gutter={[16, 16]}>
        <Col lg={{ span: 12 }} xl={{ span: 12 }} md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
          <Row gutter={24}>
            <Col span={4}>
              {Object.keys(this.props.productById).length > 0 &&
                this.props.productById?.images.map((img, index) => (
                  <Card
                    key={index}
                    hoverable
                    style={{ backgroundColor: "transparent", marginBottom: "1rem" }}
                    bodyStyle={{ width: "100%", display: "none" }}
                    size="small"
                    cover={<img alt="example" src={img} />}
                    onClick={() => this.handleImageHandler(img)}
                  />
                ))}
            </Col>
            <Col span={16}>
              <Card
                hoverable
                style={{ backgroundColor: "transparent" }}
                bodyStyle={{ width: "100%", display: "none" }}
                cover={<img alt="example" src={this.state.currentImage} />}
              />
            </Col>
          </Row>
        </Col>
        <Col lg={{ span: 12 }} xl={{ span: 12 }} md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
          {this.props.productById?.discount ? (
            <Row>
              <Button
                type="primary"
                size="small"
                style={{ backgroundColor: " red", border: "none", borderRadius: "50px" }}
              >
                sale
              </Button>
            </Row>
          ) : (
            ""
          )}
          <Row justify={small || xSmall || medium ? "center" : ""}>
            <h2 style={{ fontWeight: 300 }}>{this.props.productById.name}</h2>
          </Row>
          {this.props.productById?.discount ? (
            <Row gutter={{ lg: 12, md: 12, sm: 24, xm: 24 }} justify={small || xSmall || medium ? "center" : ""}>
              <Col lg={4} md={4} sm={6} xs={6}>
                <h3 style={{ fontWeight: 400, color: "red" }}>
                  $
                  {this.props.productById?.price -
                    (this.props.productById?.discount / 100) * this.props.productById?.price}
                </h3>
              </Col>
              <Col lg={4} md={4} sm={6} xs={6}>
                <h3 style={{ fontWeight: 300, textDecoration: "line-through", color: "gray" }}>
                  ${this.props.productById?.price}
                </h3>
              </Col>
            </Row>
          ) : (
            <Row gutter={12} justify={small || xSmall || medium ? "center" : ""}>
              <Col span={4}>
                <h3 style={{ fontWeight: 500 }}>${this.props.productById?.price}</h3>
              </Col>
            </Row>
          )}
          <Row justify={small || xSmall || medium ? "center" : ""}>
            <span style={{ marginTop: "1rem", marginBottom: "10px", fontSize: "smaller" }}>Colors:</span>
          </Row>
          <Row gutter={24} justify={small || xSmall || medium ? "center" : ""}>
            <Col xl={4} lg={4} md={4} sm={3} xs={6}>
              <Space>
                {Object.keys(this.props.productById).length > 0 &&
                  this.props.productById?.colors.map((color) => (
                    <Card key={color} size="small">
                      <Card size="small" type="inner" style={{ backgroundColor: color }}></Card>
                    </Card>
                  ))}
              </Space>
            </Col>
            {/* <Space style={{ width: "auto" }}>
              <Card size="small">
                <Card size="small" type="inner" style={{ backgroundColor: "black" }}></Card>
              </Card>
              <Card size="small">
                <Card size="small" type="inner" style={{ backgroundColor: "black" }}></Card>
              </Card>
              <Card size="small">
                <Card size="small" type="inner" style={{ backgroundColor: "black" }}></Card>
              </Card>
            </Space> */}
            {/* <Col xl={4} lg={4} md={4} sm={3} xs={6}>
              <Card size="small">
                <Card size="small" type="inner" style={{ backgroundColor: "black" }}></Card>
              </Card>
            </Col>
            <Col xl={4} lg={4} md={4} sm={3} xs={6}>
              <Card size="small">
                <Card size="small" type="inner" style={{ backgroundColor: "black" }}></Card>
              </Card>
            </Col>
            <Col xl={4} lg={4} md={4} sm={3} xs={6}>
              <Card size="small">
                <Card size="small" type="inner" style={{ backgroundColor: "black" }}></Card>
              </Card>
            </Col> */}
          </Row>
          <Row justify={small || xSmall || medium ? "center" : ""}>
            <span style={{ marginTop: "1rem", marginBottom: "10px", fontSize: "smaller" }}>Size:</span>
          </Row>
          <Row gutter={8} justify={small || xSmall || medium ? "center" : ""}>
            <Col span={7}>
              <Select
                className="custom-selector"
                placeholder="Choose Size"
                style={{ width: small || xSmall ? "" : "100%" }}
                dropdownStyle={{ borderRadius: "20px" }}
                size={small || xSmall ? "small" : "middle"}
              >
                {Object.keys(this.props.productById).length > 0 &&
                  this.props.productById?.sizes.map((size) => (
                    <Select.Option key={size} value={size}>
                      {size}
                    </Select.Option>
                  ))}
              </Select>
            </Col>
          </Row>

          <Row justify={small || xSmall || medium ? "center" : ""}>
            <span style={{ marginTop: "1rem", marginBottom: "10px", fontSize: "smaller" }}>Quantity:</span>
          </Row>
          <Row gutter={{ lg: 12, xl: 12, sm: 24, xs: 24 }} justify={small || xSmall || medium ? "center" : ""}>
            <Col xl={6} lg={6} md={8} sm={6} xs={10}>
              <Space
                style={{
                  border: "1px solid lightgray",
                  borderRadius: "50px",
                  padding: small || xSmall ? "1px 15px" : "5px 18px",
                }}
              >
                <MinusOutlined
                  style={{ color: count === 1 ? "lightgray" : "black" }}
                  onClick={this.minusHandler}
                />
                {count}
                <PlusOutlined onClick={this.plusHandler} />
              </Space>
            </Col>
            <Col xl={6} lg={6} md={8} sm={6} xs={10}>
              <Button
                type="primary"
                style={{
                  color: "black",
                  fontWeight: small || xSmall ? 400 : 600,
                  border: "none",
                  borderRadius: "50px",
                  backgroundColor: "#FBB03B",
                  padding: small || xSmall ? "2px 22px" : "4px 25px",
                }}
                size={small || xSmall ? "small" : "middle"}
              >
                ADD TO CART
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    productById: state.ProductReducer.productById,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
