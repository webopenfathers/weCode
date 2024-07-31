let $apiCfg = {};

/**
 * 前端基本配置文件，可配置对应环境的接口地址
 */
if (process.env.NODE_ENV === 'production') {
  $apiCfg = {
    domain: {
      local: 'https://xx.production.com',
      thirdparty1: 'https://third1.production.com'
    }
  };
} else {
  // 本地开发
  $apiCfg = {
    domain: {
      local: 'https://xx.debug.com',
      thirdparty1: 'https://third1.debug.com',
      someDebuDomain: 'https://some.debug.com'
    }
  };
}

const { domain } = $apiCfg;

module.exports = {
  getData: `${domain.local}/getData`,
  getThirdPartyData: `${domain.thirdparty1}/getThirdPartyData`,
  getLocalDebugData: `${domain.someDebuDomain}/getLocalDebugData`
};
