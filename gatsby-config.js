const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  siteMetadata: {
    siteUrl: 'https://headlessgatsbymultilangv2.gatsbyjs.io',
    title: 'Texaco | PDS',
    description: 'PDS System',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'qqd4ikq',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        fileName: isDev,
        displayName: isDev,
        pure: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'react-helmet',
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: '272e54eea09944c26a7ed43e94193b',
        localeFallbacks: {
          it: 'en',
          es: 'en',
          fr: 'en',
          de: 'en',
          ar: 'en',
        },
      },
    },
  ],
};
