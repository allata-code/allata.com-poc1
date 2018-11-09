import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      jobs: {
        'software-developer': {
          title: 'Software Developer',
          description: '(ง ͠ ͠° ل͜ °)ง ᴛʜᴇ ᴜɴsᴇᴇɴ ᴅᴏɴɢᴇʀ ɪs ᴛʜᴇ ᴅᴇᴀᴅʟɪᴇsᴛ (ง ͠° ل͜ °)ง '
        },
        'senior-software-developer': {
          title: 'Senior Software Developer',
          description: 'ヽ༼ຈل͜ຈ༽ﾉ RAISE YOUR DONGERS ヽ༼ຈل͜ຈ༽ﾉ'
        }
      }
    }),
    mutations: {
    },
    actions: {
    },
    getters: {
    }
  })
};

export default createStore
