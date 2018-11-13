import Vuex from 'vuex'
import blogService from './services/blogService';
import {flatten, uniq} from 'lodash'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      blogPageSize: 10,
      posts: [],
      jobs: {
        'software-developer': {
          title: 'Software Developer',
          description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.\n' +
            '\n' +
            'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.\n' +
            '\n' +
            'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.\n' +
            '\n'
        },
        'senior-software-developer': {
          title: 'Senior Software Developer',
          description: 'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.\n' +
            '\n' +
            'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.\n' +
            '\n' +
            'Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.\n' +
            '\n' +
            'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.'
        }
      }
    }),
    mutations: {
      setBlogPosts(state, posts) {
        state.posts = posts;
      }
    },
    actions: {
      loadBlogPosts(context) {
        blogService.getAllPosts().then(posts => context.commit('setBlogPosts', posts))
      }
    },
    getters: {
      blogPosts: (state) => (page) => {
        return state.posts.slice(Math.min(page * state.blogPageSize, state.posts.length), Math.min((page * state.blogPageSize) + 10, state.posts.length));
      },
      blogPostsByTag: (state) => (tag) => {
        return state.posts.filter(post => post.tags.indexOf(tag) >= 0)
      },
      blogTags: (state) => {
        return uniq(flatten(state.posts.map(p => p.tags)))
      },
      post: (state) => (slug) => {
        return state.posts.find(post => post.slug === slug)
      }
    }
  })
};

export default createStore
