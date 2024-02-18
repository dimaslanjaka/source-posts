import gis from '../src/google-image-search';

gis({ searchTerm: 'hexo nodejs' }, (err, data) => {
  if (data) {
    console.log(data[0].url);
  }
});
