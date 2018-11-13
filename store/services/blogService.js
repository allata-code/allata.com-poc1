import contentful from './contentfulClient';
import {documentToHtmlString} from '@contentful/rich-text-html-renderer';

const client = contentful.createClient();

export default {
  getAllPosts() {
    return new Promise((resolve, reject) => {
      client.getEntries({
        content_type: 'blogPost',
        include: 2
      // 'fields.publishDate[lt]': (new Date())
      })
        .then(posts =>
          resolve(posts.items.map(p =>
            // Object.assign({html: documentToHtmlString(p.fields.body)}, p.fields)
            p.fields
          )))
        .catch(err => {
          console.error(err);
          reject(err)
        });
    })
  }
}
