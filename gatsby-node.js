const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(result.errors)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach((node) => {
    createPage({
      path: `/works/${node.frontmatter.slug}`,
      component: path.resolve(`./src/pages/works/work-layout.js`),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}