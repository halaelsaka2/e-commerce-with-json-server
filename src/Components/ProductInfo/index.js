import { Component } from "react";
import { Row, Col, Card, Button, Select, Space, message } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ImageGallery from "react-image-gallery";
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
    return (
      <Row gutter={[16, 16]}>
        <Col span={12}>
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
        <Col span={12}>
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
          <Row>
            <h2 style={{ fontWeight: 300 }}>{this.props.productById.name}</h2>
          </Row>
          {this.props.productById?.discount ? (
            <Row gutter={12}>
              <Col span={4}>
                <h3 style={{ fontWeight: 400, color: "red" }}>
                  $
                  {this.props.productById?.price -
                    (this.props.productById?.discount / 100) * this.props.productById?.price}
                </h3>
              </Col>
              <Col span={4}>
                <h3 style={{ fontWeight: 300, textDecoration: "line-through", color: "gray" }}>
                  ${this.props.productById?.price}
                </h3>
              </Col>
            </Row>
          ) : (
            <Row gutter={12}>
              <Col span={4}>
                <h3 style={{ fontWeight: 500 }}>${this.props.productById?.price}</h3>
              </Col>
            </Row>
          )}
          <Row>
            <span style={{ marginTop: "2rem", marginBottom: "10px", fontSize: "smaller" }}>Colors:</span>
          </Row>
          <Row gutter={8}>
            {Object.keys(this.props.productById).length > 0 &&
              this.props.productById?.colors.map((color) => (
                <Col span={2} key={color}>
                  <div
                    style={{
                      border: "1px solid lightgray",
                      padding: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "30px",
                      height: "25px",
                    }}
                  >
                    <div style={{ backgroundColor: color, width: "80%", height: "15px" }}></div>
                  </div>
                </Col>
              ))}
          </Row>
          <Row>
            <span style={{ marginTop: "2rem", marginBottom: "10px", fontSize: "smaller" }}>Size:</span>
          </Row>
          <Row gutter={8}>
            <Col span={7}>
              <Select
                className="custom-selector"
                placeholder="Choose Size"
                style={{ width: "100%" }}
                dropdownStyle={{ borderRadius: "20px" }}
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

          <Row>
            <span style={{ marginTop: "2rem", marginBottom: "10px", fontSize: "smaller" }}>Quantity:</span>
          </Row>
          <Row gutter={12}>
            <Space style={{ border: "1px solid lightgray", borderRadius: "50px", padding: "5px 18px" }}>
              <MinusOutlined style={{ color: count === 1 ? "lightgray" : "black" }} onClick={this.minusHandler} />
              {count}
              <PlusOutlined onClick={this.plusHandler} />
            </Space>
            <Col span={7}>
              <Button
                type="primary"
                style={{
                  color: "black",
                  fontWeight: 600,
                  border: "none",
                  borderRadius: "50px",
                  backgroundColor: "#FBB03B",
                  padding: "4px 25px",
                }}
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
