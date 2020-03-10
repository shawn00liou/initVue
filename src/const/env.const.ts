const Env = {
  NodeEnv: process.env.NODE_ENV,
  Client: process.env.CLIENT,
  Server: process.env.SERVER,
  Dev: process.env.DEV,
  Prod: process.env.PROD,
  Mode: process.env.MODE,
  AppCDNDomain: process.env.APP_CDN_DOMAIN,
  AppAPIDomain: process.env.APP_API_DOMAIN,
  VueRouterMode: process.env.VUE_ROUTER_MODE,
  VueRouterBase: process.env.VUE_ROUTER_BASE,
  AppUrl: process.env.APP_URL
};

export default Env;
