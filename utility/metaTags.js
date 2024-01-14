export const siteName = "Catepedia";
export const siteTitle = "The Ultimate Guide to Cat Breeds";

const base = [
  { charset: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  { name: 'title', content: 'Catepedia | The Ultimate Guide to Cat Breeds' },
  {
    hid: 'description',
    name: 'description',
    content:
      'Catepedia allows you to search and learn more about various cat breeds!',
  },
]

const openGraph = [
  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: 'https://github.com/Rajesh-Royal/catepedia' },
  { property: 'og:title', content: 'Catepedia' },
  {
    property: 'og:description',
    content:
      'Catepedia allows you to search and learn more about various cat breeds.',
  },
  {
    property: 'og:image',
    content: 'https://www.freewebheaders.com/wp-content/gallery/cats/cache/cats-header-20738-800x200.jpg-nggid03207-ngg0dyn-1280x375x100-00f0w010c011r110f110r010t010.jpg',
  },
]

const twitter = [
  { property: 'twitter:card', content: 'summary_large_image' },
  { property: 'twitter:url', content: 'https://github.com/Rajesh-Royal/catepedia' },
  { property: 'twitter:title', content: 'Catepedia' },
  {
    property: 'twitter:description',
    content:
      'Catepedia allows you to search and learn more about various cat breeds.',
  },
  {
    property: 'twitter:image',
    content: 'https://www.freewebheaders.com/wp-content/gallery/cats/cache/cats-header-20738-800x200.jpg-nggid03207-ngg0dyn-1280x375x100-00f0w010c011r110f110r010t010.jpg',
  },
]

const metaTags = [...base, ...openGraph, ...twitter]

export default metaTags
