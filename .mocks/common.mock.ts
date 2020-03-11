var siteconfig = require('../.mocks/siteConfig.demo.json');

//console.log('JSON---->',siteconfig);

export async function CommonGetSiteConfig():Promise<{SiteConfig:any}>{
  //console.log('SHOW-->',siteconfig);
  return {
    SiteConfig:siteconfig
  }
}
