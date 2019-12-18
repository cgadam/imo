module.exports = {
  siteTitle: 'imo - deco funcional', // <title>
  manifestName: 'imo - deco funcional',
  manifestShortName: 'imo', // max 12 characters
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
  ],
  features: [
    {
      title: 'REGULACION EN ALTURA',
      description: `
      Mínimo: 68 cm / Máximo: 118 cm
      Elevación: eléctrica o manual
      `,
      getImg: () => import('./src/assets/images/features/altura.png')
    },
    {
      title: 'TOMA CORRIENTE',
      description: `
      4 toma corriente para:
      Smart / Tablet / Notebook
      `,
      getImg: () => import('./src/assets/images/features/corriente.png')
    },
    {
      title: 'MEDIDAS',
      description: `
      Ancho: 130 cm
      (opcional hasta 180 cm)
      Profundidad: 70 cm
      (opcional hasta 90 cm)
      `,
      getImg: () => import('./src/assets/images/features/medidas.png')
    },
    {
      title: 'BANDEJA PARA CABLES',
      description: `
      Bandeja organizadora para ordenar los cables de tus dispositivos
      `,
      getImg: () => import('./src/assets/images/features/cables.png')
    },
    {
      title: 'CAJONES',
      description: `
      2 cajones frontales para mantener el escritorio ordenado
      `,
      getImg: () => import('./src/assets/images/features/cajones.png')
    },
    {
      title: 'COLORES',
      description: `
      Escritorio: Blanco, Gris, Negro.
      Tapa y Accesorios: Blanco (consultar opciones)
      `,
      getImg: () => import('./src/assets/images/features/colores.png')
    }
  ],
  beneficios: [
    {
      name: 'energia',
      getImg: () => import ('./src/assets/images/beneficios/energia.png'),
      getActiveImg: () => import('./src/assets/images/beneficios/energia-hover.png'),
    },
    {
      name: 'molestias',
      getImg: () => import ('./src/assets/images/beneficios/molestias.png'),
      getActiveImg: () => import('./src/assets/images/beneficios/molestias-hover.png'),
    },
    {
      name: 'productividad',
      getImg: () => import ('./src/assets/images/beneficios/productividad.png'),
      getActiveImg: () => import('./src/assets/images/beneficios/productividad-hover.png'),
    }
  ]
};
