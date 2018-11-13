const contentful = require('contentful');

const config = {
  space: process.env.CTF_SPACE_ID || 'zfhd3udeelb4',
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN || '742780729f80194b5e3d9cf5d80cffa2fdbaef077f91229463395e032248718e'
};

export default {
  createClient () {
    return contentful.createClient(config)
  }
}


