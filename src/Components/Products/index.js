import { Component } from "react";
import { Row, Col, Card, Pagination } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { saveCurrentPage, getProductsByfilters } from "../../Redux/Product/Action";
const { Meta } = Card;

class Products extends Component {
  clickProductHandler = (id) => {
    this.props.history.push(`/viewProduct/${id}`);
  };
  paginateHandler = (page) => {
    console.log(page);
    this.props.getProductsByfilters(
      this.props.currentCategory,
      this.props.currentColor,
      this.props.currentPriceRange,
      this.props.currentSize,
      this.props.currentType,
      page,
      this.props.pageSize,
      this.props.sortValue
    );
  };
  render() {
    return (
      <>
        <Row gutter={[16, 16]}>
          {this.props.allProductsWithFilter.length > 0 ? (
            this.props.allProductsWithFilter.map((product) => (
              <Col key={product.id} lg={{ span: 8 }} xl={{ span: 8 }} md={{ span: 12 }} sm={{ span: 24 }}>
                <Card
                  onClick={() => this.clickProductHandler(product.id)}
                  hoverable
                  style={{ width: "80%" }}
                  cover={<img alt="example" src={product.images[0]} />}
                >
                  <Meta
                    title={product.name}
                    description={
                      product.discount ? (
                        <Row gutter={16}>
                          <Col>
                            <h3 style={{ fontWeight: 400, color: "red" }}>
                              ${product?.price - (product?.discount / 100) * product?.price}
                            </h3>
                          </Col>
                          <Col>
                            <h3 style={{ fontWeight: 300, textDecoration: "line-through", color: "gray" }}>
                              ${product?.price}
                            </h3>
                          </Col>
                        </Row>
                      ) : (
                        <Row gutter={16}>
                          <Col>
                            <h3 style={{ fontWeight: 400 }}>${product?.price}</h3>
                          </Col>
                        </Row>
                      )
                    }
                  />
                </Card>
              </Col>
            ))
          ) : (
            <div>NoProducts</div>
          )}
        </Row>
        <Row gutter={24}>
          <Col span={24} align="right" style={{ marginTop: "2rem" }}>
            <Pagination
              total={this.props.productsCount}
              responsive={true}
              hideOnSinglePage={true}
              onChange={this.paginateHandler}
              pageSize={this.props.pageSize}
            />
          </Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    allProductsWithFilter: state.ProductReducer.allProductsWithFilter,
    productsCount: state.ProductReducer.productsCount,

    currentCategory: state.CategoryReducer.currentCategory,
    currentColor: state.ProductReducer.currentColor,
    currentSize: state.ProductReducer.currentSize,
    currentPriceRange: state.ProductReducer.currentPriceRange,
    currentType: state.ProductReducer.currentType,
    pageSize: state.ProductReducer.pageSize,
    sortValue: state.ProductReducer.sortValue,
  };
};
const mapDispatchToProps = { saveCurrentPage, getProductsByfilters };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Products));
