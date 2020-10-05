const lost = require('lost')
const pxtorem = require('postcss-pxtorem')

module.exports = {
  pathPrefix: '/blog',
  siteMetadata: {
    siteUrl: 'https://fmannhardt.de',
    url: 'https://fmannhardt.de',
    title: 'Felix Mannhardt',
    subtitle:
      'Process Mining Researcher',
    copyright: 'CC BY-SA 4.0',
    impressum: {
      label: 'Impressum',
      path: '/impressum',
    },
    disqusShortname: '',
    menu: [
      {
        label: 'Blog',
        path: '/',
        submenu: [],
      },
      {
        label: 'About me',
        path: '/about/',
        submenu: [
          {
            label: 'Work experience',
            path: '/about/work',
          },
          {
            label: 'PhD thesis',
            path: '/about/phd',
          },
          {
            label: 'Personal',
            path: '/about/personal',
          }
        ],
      },
      {
        label: 'My research',
        path: '/research/',
        submenu: [
          {
            label: 'Publications',
            path: '/research/publications',
          },
          {
            label: 'Presentations',
            path: '/research/presentations',
          }
        ],
      },
      {
        label: 'Open source development',
        path: '/software/',
        submenu: [
          {
            label: 'bupaR',
            path: '/software/bupar',
          },
          {
            label: 'ProM',
            path: '/software/prom',
          },
        ],
      },      
      {
        label: 'Contact',
        path: '/contact/',
        submenu: [],
      },
    ],
    author: {
      name: 'Felix Mannhardt',
      email: 'f.mannhardt@tue.nl',
      twitter: 'fmannhardt',
      github: 'fmannhardt',
      rss: '/blog/rss.xml',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {        
        query: `
          {
            site {
              siteMetadata {
                site_url: url
                title: title
                description: subtitle
                copyright
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => allMarkdownRemark.edges.map(edge => Object.assign({},
              edge.node.frontmatter, {
                description: edge.node.frontmatter.description,
                date: edge.node.frontmatter.date,
                author: 'Felix Mannhardt',
                categories: edge.node.frontmatter.tags,
                url: site.siteMetadata.site_url + edge.node.fields.slug,
                guid: site.siteMetadata.site_url + edge.node.fields.slug,
                custom_elements: [{ 'content:encoded': edge.node.html }],
              })
            ),
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                        layout
                        draft
                        tags
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: 'rss.xml',
            title: 'fmannhardt.de',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: { wrapperStyle: 'margin-bottom: 1.0725rem' },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-katex',
          'gatsby-remark-emojis',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Source Sans Pro:400,400i,500,700'],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          lost(),
          pxtorem({
            rootValue: 16,
            unitPrecision: 5,
            propList: [
              'font',
              'font-size',
              'line-height',
              'letter-spacing',
              'margin',
              'margin-top',
              'margin-left',
              'margin-bottom',
              'margin-right',
              'padding',
              'padding-top',
              'padding-left',
              'padding-bottom',
              'padding-right',
              'border-radius',
              'width',
              'max-width',
            ],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0,
          }),
        ],
        precision: 8,
      },
    },
  ],
}
