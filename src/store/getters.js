const getters = {
  title: state => state.settings.title,
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  name: state => state.user.name
};
export default getters;
