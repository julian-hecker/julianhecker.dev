module.exports = {
    siteMetadata: {
        title: 'julianhecker.dev',
        siteUrl: 'https://julianhecker.dev',
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-187787321-1',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-transformer-remark',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'assets',
                path: './src/assets/',
            },
            __key: 'assets',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Roboto`, `Roboto Mono`],
                display: `swap`,
            },
        },
    ],
};
