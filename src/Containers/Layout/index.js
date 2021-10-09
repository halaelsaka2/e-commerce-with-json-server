import { Layout } from "antd";

import HeaderContent from "../../Components/HeaderContent";
import BreadCrumb from "../../Components/BreadCrumb";
import HomePage from "../Home";
import { Switch, Route,Redirect } from "react-router-dom";
import ViewProduct from "../ViewProduct";
import { Component } from "react";
import { getAll } from "../../Redux/Category/Action";
import { connect } from "react-redux";

const { Header, Content, Footer } = Layout;

class LayoutComponent extends Component {
  componentDidMount = () => {
    this.props.getAll();
  };
  render() {
    return (
      <Layout>
        <Layout style={{ backgroundColor: "white" }}>
          <Header
            className="site-layout-sub-header-background"
            style={{
              padding: "0 40px",
              backgroundColor: "white",
              borderBottom: "1px solid lightgray",
              borderColor: "lightgray",
            }}
          >
            <HeaderContent />
          </Header>

          <Content style={{ margin: "30px 40px 0" }}>
            <BreadCrumb />
            <Layout style={{ backgroundColor: "white" }}>
              <Switch>
                <Route path="/home" component={HomePage} />
                <Route path="/viewProduct/:id" component={ViewProduct} />
                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
              </Switch>
            </Layout>
          </Content>
          <Footer style={{ textAlign: "center", backgroundColor: "white" }}></Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};
const mapDispatchToProps = { getAll };

export default connect(mapStateToProps, mapDispatchToProps)(LayoutComponent);
