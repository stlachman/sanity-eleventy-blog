export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f9447782b01491acd568ca7',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-on1q51x2',
                  apiId: '21849957-72b1-43ba-b13f-13f8ed0d6510'
                },
                {
                  buildHookId: '5f9447792b0149144f568dcb',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ynw4sy8s',
                  apiId: 'f95e96ad-e424-4509-be5b-3a4e34e5bd18'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stlachman/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ynw4sy8s.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
