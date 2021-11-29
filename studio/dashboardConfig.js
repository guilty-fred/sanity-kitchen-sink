export default {
  widgets: [
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
                  buildHookId: '61a4bf39a1ca8a2e77bc9787',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-uu52m82z',
                  apiId: '882d57f8-acbb-4c7f-b8fc-b2a9db7ee9c1'
                },
                {
                  buildHookId: '61a4bf39c63f6629c77250ec',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ndcttf8m',
                  apiId: 'a044f684-7011-4323-8948-fbe500ade85d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/guilty-fred/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ndcttf8m.netlify.app', category: 'apps'}
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
