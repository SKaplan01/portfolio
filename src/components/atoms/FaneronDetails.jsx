import React, { Component } from 'react'
import lipslutGif from '../../assets/lipslutGif.gif'
import ls_ingredients from '../../assets/ls_ingredients.gif'
import webhook from '../../assets/webhook.png'
import ls_data_vis from '../../assets/ls_data_vis.gif'

class FaneronDetails extends Component {
  render() {
    let { theme } = this.props
    return (
      <div id="FaneronDetails">
        <h1 style={{ color: theme }}>Faneron</h1>
        <hr />
        <p>
          Lipslut.com sells makeup to benefit progressive causes. As an intern
          for Faneron, I worked on several features for lipslut 2.0, focusing on
          3 main areas:
          <br />
          <br />
          <ol>
            <li>Dynamic React components</li>
            <li>Data Visualization</li>
            <li>Accessibility</li>
          </ol>
        </p>
        <div style={{ textAlign: 'center' }}>
          <img src={lipslutGif} alt="lipslut.com site" />
        </div>
        <br />
        <p>
          <a
            style={{ textShadow: 'none', backgroundImage: 'none' }}
            href="https://github.com/SKaplan01/lipslut2.0"
          >
            View on Github
          </a>
        </p>
        <p>
          <b>Dynamic Components </b>
          <br />
          <i>GraphQL, React, webhooks, Lambda functions</i>
          <br />
          <br />
          When we started working on lipslut.com, some content was hardcoded
          into the React components. We updated this code to make sure that the
          content for each product was generated dynamically, using GraphQL to
          fetch data from the site’s CMS (Contentful). For example, we updated
          the navigation bar so that, as the product team adds new batches of
          lipstick to the CMS, the navbar will automatically render an accurate
          dropdown menu with all lipsticks currently for sale. We also added
          dynamic components for the product details page, ingredients list, and
          voting popup.
        </p>
        <br />
        <div style={{ textAlign: 'center' }}>
          <img src={ls_ingredients} alt="lipslut.com site" />
        </div>
        <br />
        <p>
          One challenge we faced was updating the UI for products that are sold
          out.
          <br />
          <br />
          The problem:
          <br />
          <br />
          <ul>
            <li>A product might sell out suddenly</li>
            <li>An external API (Shopify) keeps track of product inventory</li>
            <li>
              A GraphQL query to check the Shopify inventory runs at build time
            </li>
            <li>
              On the lipslut.com 1.0 site, the UI won't update until team member
              manually clicked "build"
            </li>
            <li>
              Hundreds of people might try to buy "sold-out" lipstick before the
              UI is updated
            </li>
          </ul>
          Our solution:
          <br />
          <br />
          <div style={{ textAlign: 'center' }}>
            <img src={webhook} alt="webhooks" />
          </div>
          <br />
          We set up a webhook through Shopify that called a function whenever
          the product inventory changed. Because lipslut.com is built with
          Gatsby.js, a serverless static site generator, we had to create an AWS
          Lambda function that the webhook could connect with. We set up the
          Shopify webhook to call our Lambda function, which would trigger the
          site to rebuild automatically when a product’s inventory hit zero.
        </p>
        <p>
          <b>Data Visualization</b>
          <br />
          <i>Gatsby lifecycle methods, Node, CSS</i>
        </p>
        <div style={{ textAlign: 'center' }}>
          <img src={ls_data_vis} alt="" />
        </div>
        <p>
          I really enjoyed helping to create this data visualization of lipstick
          sales in each state. Lipslut is a product with a progressive mission
          and the team was surprised by the geographic breakdown of the sales
          data. Our goal was to create a visual representation of the data that
          would highlight purchases that occurred in these surprising states.
        </p>
        <p>
          Another goal was to ensure a fast build time while processing a large
          dataset. We used Gatsby’s onPreBootstrap lifecycle method to run a
          function in Node that read and aggregated thousands of lines of sales
          data from a csv before building nodes to create the data
          visualization, which shaved almost two minutes off the build time.
        </p>
        <p>
          <b>Accessibility</b>
          <br />
          <i>React refs, W3C standards for accessibility</i>
        </p>
        <p>
          Another aspect of this project that I enjoyed was improving the
          accessibility of the navigation bar. After attending a great tech talk
          about accessibility, I was inspired to use ChromeVox to try navigating
          lipslut.com using a keyboard and a screen reader. My team discovered
          that the dropdown menus in the site’s navigation were not discoverable
          with a keyboard or screen reader. To address this problem, we used
          React refs to programmatically manage the focus, ensuring that users
          navigating the site with a keyboard would be able to tab through all
          the dropdown menus and that the focus (and the screen reader) would
          track these shifts.
        </p>
        <p>
          Thank you to{' '}
          <a
            style={{ textShadow: 'none', backgroundImage: 'none' }}
            href="https://github.com/NEsfandiari"
          >
            Niki Esfandiari
          </a>
          , lipslut.com’s lead engineer, and to my fellow Faneron interns&mdash;
          <a
            style={{ textShadow: 'none', backgroundImage: 'none' }}
            href="https://github.com/victor-marks"
          >
            Victor Marks
          </a>
          ,{' '}
          <a
            style={{ textShadow: 'none', backgroundImage: 'none' }}
            href="https://github.com/pungprakearti"
          >
            Andrew Pungprakearti
          </a>
          , and{' '}
          <a
            style={{ textShadow: 'none', backgroundImage: 'none' }}
            href="https://github.com/gramel"
          >
            Glenn Ramel
          </a>
          &mdash;for collaborating on this project.
        </p>
      </div>
    )
  }
}

export default FaneronDetails
