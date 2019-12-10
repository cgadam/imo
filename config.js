module.exports = {
  siteTitle: 'imo - deco funcional', // <title>
  manifestName: 'Spectral',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/logo.png',
  pathPrefix: `/imo/`, // This path is subpath of your hosting https://domain/portfolio
  heading: '',
  subHeading: '',
  // social
  socialLinks: [
    {
      name: 'Instagram',
      icon: 'instagram',
      url: 'https://www.instagram.com/stolz.muebles/',
    },
    {
      name: 'Email',
      icon: 'email',
      url: 'mailto:info@imomuebles.com.ar',
    },
    {
      name: 'Whatsapp',
      icon: 'whatsapp',
      url: 'https://wa.me/5493516245478',
    },
  ],
  products: [
    {
      title: 'Eléctrico',
      description:
        'Escritorio Regulable en altura mediante sistema eléctrico inteligente con memoria de posicionamiento',
      imgSrc: () => import('./src/assets/images/gif/imo-gif-2.gif'),
    },
    {
      title: 'Manual',
      description: 'Escritorio Regulable en altura con manivela extraíble',
      imgSrc: () => import('./src/assets/images/gif/imo-gif-3.gif'),
    },
    {
      title: 'Modular',
      description: 'Escritorio en L de doble altura',
      imgSrc: () => import('./src/assets/images/gif/imo-gif-4.gif'),
    },
  ],
  carousel: [
    () => import('./src/assets/images/carousel/foto2.jpg'),
    () => import('./src/assets/images/carousel/foto3.jpg')
  ]
};
