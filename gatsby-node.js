exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}


exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type slug {
      slug: String!
    }
  `
  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
  {
    allGraphCmsItemTours {
      edges {
        node {
          
           
            slug
           
          
          }
         
        }
      
    }
    
  }

  `)

 const posts = data.allGraphCmsItemTours.edges

  posts.forEach(edge => {

    createPage({
      path: `/${edge.node.slug}`,
      component: require.resolve(`./src/templates/tourdetails.js`),
      context: {
        slug: edge.node.slug,
      }, 
      defer: edge.node.slug > 3,
    })





  })
};
