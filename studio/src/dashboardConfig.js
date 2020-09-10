export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f599cd7c1dab750af0122c5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-83ncu88k',
                  apiId: '737bdc27-2fe2-4095-bdd8-b5c30f68d822'
                },
                {
                  buildHookId: '5f599cd7b849f94b64cf5582',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gxvvyj6z',
                  apiId: '01eb2a24-dd2c-4d8c-a86c-90ee807a127b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Kastango/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gxvvyj6z.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
