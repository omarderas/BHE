/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Belize Hummingbird Expeditions`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Jose Urbina`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: "https://api-us-west-2.hygraph.com/v2/clu7wnd5m0fya07w6weofuwg2/master",
        token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTIwMzQyODksImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2x1N3duZDVtMGZ5YTA3dzZ3ZW9mdXdnMi9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC11cy13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiZTVhZmQxM2MtMmJlOC00YmRjLTlkMGUtYTE4NmMzODdkNmQzIiwianRpIjoiY2x1aHgwZ2k3Mjk5NzA2bjNnMjNoZDR3byJ9.rksyCRQWWD-vFRktabFAyHsIfQOhuwKhdEYE9pl1hMM5KELesOkpY5RnpSjGu-uXNLfxqKPvRBdhlfkbXVk5fFjJ7Wc4LxOMmIuCDcQK8sQD7Lx5fz9YDCdAnK42mVJzWIyQgjdgJFErQjZK67--JCRHHhxUpHjoDAsqlF80hXTqY-prnKcxfTEvIDabUwgDZD4b9C1CIZV81WJ61qLYvp9CD4epY5VY1Wqh-P8V3Nf_lIZjmoIJ-rYloMDQ8XPf9b0lfBpNs6Ka4yeur7a5AoMjKQcKYtPGxl9eC740g9L67kz4K6qACamvZO-U3dnEstoXo7Ca1TkSQvT80MrYNxvHWKwvVeLy7RarsY5LxUEEGoYA3mMt4wbQnxBLL24wF6lXbBFwZYHdGYkVNxYJiSgIS70aYRWceuUth-ePPlj0a0JoaL9RhgxoVs5Ua-24ZLX8w-coVfAJ9w2BUrmor2rvEBSBpZCcWhE69HaTUKlg39J3ylbPucMh2RYz5DnznNKFZH4iXvRuGExMlh_h_nBoE7NFFn7aE8voOGlNkeQzYyVTGoaCFk-gJgpLIdltlGsLdoJ0pdx_ex5OcvmMOzPo5dSlPz-TAlPo7uCsh0x597liX_v1o6QJTLgBk2H5kFSFvbvHHMHjur5-1IkqIHqZf2AhRNdc1B3f7iccz20",
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          placeholder: 'blurred',
          quality: 70,
          breakpoints: [300],
          backgroundColor: 'transparent',
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/bhe-main-new.png`, // This path is relative to the root of the site.
      },
      
    },

  ],
}
