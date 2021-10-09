import { Layout } from "antd";

import HeaderContent from "../../Components/HeaderContent";
import BreadCrumb from "../../Components/BreadCrumb";
import HomePage from "../Home";
import { Switch, Route, Redirect } from "react-router-dom";
import ViewProduct from "../ViewProduct";
import { Component } from "react";
import { getAll } from "../../Redux/Category/Action";
import { connect } from "react-redux";

const { Header, Content, Footer } = Layout;

class LayoutComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
  }
  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.props.getAll();
  }

  render() {
    const xs = 480;
    const sm = 576;
    const md = 768;
    const lg = 992;

    const medium = this.state.windowWidth < md;
    const small = this.state.windowWidth < sm;
    const xSmall = this.state.windowWidth < xs;
    const large = this.state.windowWidth < lg;
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
            <BreadCrumb medium={medium} large={large} small={small} xSmall={xSmall} />
            <Layout style={{ backgroundColor: "white", width: "100%" }}>
              <Switch>
                <Route
                  path="/home"
                  render={(props) => (
                    <HomePage {...props} medium={medium} large={large} small={small} xSmall={xSmall} />
                  )}
                />
                <Route
                  path="/viewProduct/:id"
                  render={(props) => (
                    <ViewProduct {...props} medium={medium} large={large} small={small} xSmall={xSmall} />
                  )}
                />
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
