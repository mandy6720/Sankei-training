
const params = {
  hierarchy: 'text',
  id: 'text',
};

const resolve = (key) => {
  const { hierarchy, id } = key; // hierarchy = key.hierarchy
  const requestUri = `/site/v3/navigation/demo/?hierarchy=${hierarchy || 'default'}&_id=${id || '/'}`;
  return requestUri;
}

export default {
  resolve,
  params,
}
