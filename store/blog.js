import blogService from './services/blogService';
import {flatten, uniq} from 'lodash'

export const state = () => ({
  blogPageSize: 10,
  posts: [],
});

export const mutations = {
  setBlogPosts(state, posts) {
    state.posts = posts;
  }
};
export const actions = {
  loadBlogPosts({state, commit}) {
    if (state.posts.length) {
      return;
    }
    blogService.getAllPosts().then(posts => commit('setBlogPosts', posts))
  }
};
export const getters = {
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
};

