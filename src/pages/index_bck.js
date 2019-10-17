import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
     David Donahue
    </h1>
    <body>
     <p> Github: https://www.github.com/djd1283 </p>
     <p> Email: david_donahue@student.uml.edu </p>
     <p> LinkedIn: https://www.linkedin.com/in/david-donahue-77685591/ </p>
     <p>Here is a place to display both personal projects and research projects alike. Come check them out!</p>
     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
       <Image />
     </div>
    </body>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
