import imgAPI from '~/public/images/imgAPI';

const sample = [
  {
    id: 'company',
    name: 'company',
    thumb: imgAPI.ui[3],
    child: [
      {
        name: 'about',
        link: '/about'
      },
      {
        name: 'team',
        link: '/about/team'
      },
      {
        name: 'blog',
        link: '/blog'
      },
      {
        name: 'blog detail',
        link: '/blog/detail-blog'
      }
    ],
  },
  {
    id: 'form',
    name: 'Form',
    thumb: imgAPI.ui[1],
    child: [
      {
        name: 'login',
        link: '/login'
      },
      {
        name: 'register',
        link: '/register'
      },
      {
        name: 'contact',
        link: '/contact'
      },
      {
        name: 'contact map',
        link: '/contact/with-map'
      }
    ],
  },
  {
    id: 'items',
    name: 'items',
    thumb: imgAPI.ui[0],
    child: [
      {
        name: 'card',
        link: '/collection'
      },
      {
        name: 'product',
        link: '/collection/products'
      },
      {
        name: 'product detail',
        link: '/collection/detail-product'
      }
    ],
  },
  {
    id: 'utilities',
    name: 'utilities',
    thumb: imgAPI.ui[2],
    child: [
      {
        name: 'pricing',
        link: '/utils/pricing'
      },
      {
        name: 'faq',
        link: '/utils/faq'
      },
      {
        name: 'maintenance',
        link: '/utils/maintenance'
      },
      {
        name: 'coming soon',
        link: '/utils/coming-soon'
      },
      {
        name: 'error',
        link: '/error'
      }
    ]
  }
]

export default sample
