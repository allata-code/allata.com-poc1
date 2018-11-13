const contentful = require('contentful');

const config = {
  space: process.env.CTF_SPACE_ID || 'ex0in4a0h3u2',
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN || 'fbce1246ec17843b5a7aa00a30209653bd39fa61c80bdaef00827d88d023bd8b'
};

export default {
  createClient () {
    return contentful.createClient(config)
  }
}


