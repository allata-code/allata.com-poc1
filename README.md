# allata.com

> The greatest POC ever made

## Build Setup

#### Environment Vars
Allata.com requires the following env vars setup when running locally or generating static site:
`CTF_SPACE_ID`: Space Id for Contentful
`CTF_CDA_ACCESS_TOKEN`: Access token for the Contentful space


``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
