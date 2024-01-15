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
  { property: 'og:url', content: 'https://catepedia.vercel.app' },
  { property: 'og:title', content: 'Catepedia' },
  {
    property: 'og:description',
    content:
      'Catepedia allows you to search and learn more about various cat breeds.',
  },
  {
    property: 'og:image',
    content: 'https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/catepedia.vercel.app/Catepedia%20%7C%20The%20Ultimate%20Guide%20to%20Cat%20Breeds/Catepedia%20allows%20you%20to%20search%20and%20learn%20more%20about%20various%20cat%20breeds./https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F5365a380-3e00-4974-b93f-1a04f9d49a63.jpg%3Ftoken%3DsUl48uonQBrYGgweKdo6oqp5mb9CbglNBVcoHuB_pGA%26height%3D576%26width%3D1200%26expires%3D33241304565/og.png',
  },
]

const twitter = [
  { property: 'twitter:card', content: 'summary_large_image' },
  { property: 'twitter:url', content: 'https://catepedia.vercel.app' },
  { property: 'twitter:title', content: 'Catepedia' },
  {
    property: 'twitter:description',
    content:
      'Catepedia allows you to search and learn more about various cat breeds.',
  },
  {
    property: 'twitter:image',
    content: 'https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/catepedia.vercel.app/Catepedia%20%7C%20The%20Ultimate%20Guide%20to%20Cat%20Breeds/Catepedia%20allows%20you%20to%20search%20and%20learn%20more%20about%20various%20cat%20breeds./https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F5365a380-3e00-4974-b93f-1a04f9d49a63.jpg%3Ftoken%3DsUl48uonQBrYGgweKdo6oqp5mb9CbglNBVcoHuB_pGA%26height%3D576%26width%3D1200%26expires%3D33241304565/og.png',
  },
]

const metaTags = [...base, ...openGraph, ...twitter]

export default metaTags
