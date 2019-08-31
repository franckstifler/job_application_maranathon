import React from "react"

import Layout from "../components/layout"
import Offer from "../components/offer"
import Requirements from "../components/requirements"
import Contact from "../components/contact"
import SEO from "../components/seo"

import 'uikit/dist/css/uikit.min.css';
// import 'uikit/dist/js/uikit.min.js';

class IndexPage extends React.Component {

  componentDidMount() {
    import("uikit/dist/js/uikit")
      .then((uikit) => {
        this.uikit = uikit;
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div className="uk-text-uppercase uk-text-center">
          <img style={{ height: 300, width: "auto" }} src="/images/maranathon.jpg" alt="Maranathon Beauty Clinic image" />
          <h1 className="uk-margin-top uk-heading-line uk-text-uppercase"><span>Maranathon Beauty Clinic</span></h1>
          <p className="uk-text-lead">Douala - Yaounde - Bamenda - Bafoussam</p>
        </div>
        <Offer />
        <Requirements />
        <Contact />
      </Layout>
    )
  }
}

export default IndexPage
