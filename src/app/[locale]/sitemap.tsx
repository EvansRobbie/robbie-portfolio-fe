import { DATA } from '@/_data/resume';

const sitemap = async () => {
  return [
    {
      url: DATA.url,
      lastModified: new Date(),
    },
    {
      url: `${DATA.url}/blogs`,
      lastModified: new Date(),
    },
    {
      url: `${DATA.url}/#projects`,
      lastModified: new Date(),
    },
    {
      url: `${DATA.url}/#contact`,
      lastModified: new Date(),
    },
  ];
};

export default sitemap;
