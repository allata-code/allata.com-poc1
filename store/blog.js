import {flatten, uniq} from 'lodash'
import contentful from './services/contentfulClient';
import {markdown} from 'markdown';

const client = contentful.createClient();

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

    console.log('state', state);
    client.getEntries({
      content_type: 'blogPost',
      include: 2
      // 'fields.publishDate[lt]': (new Date())
    }).then(posts => commit('setBlogPosts',
      posts.items.map(p => Object.assign({html: markdown.toHTML(p.fields.body)}, p.fields)))
    ).catch(err => {
      console.error(err);
    });
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

