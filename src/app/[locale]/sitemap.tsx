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
  ];
};

export default sitemap;
