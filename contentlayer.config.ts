import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({
  contentDirPath: 'src/docs',
  documentTypes: [Post],
  mdx: {
    // @ts-ignore
    rehypePlugins: [[rehypePrettyCode, { theme: 'dracula-soft' }]],
  },
})
