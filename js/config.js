// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    testSource: {
  "name":"LibreTV-Settings",
  "time":"1757220827714",
  "cfgVer":"1.0.0",
  "data":{
    "selectedAPIs":"[\"qiqi\",\"testSource\",\"custom_0\",\"custom_1\",\"custom_2\",\"custom_3\",\"custom_4\",\"custom_5\",\"custom_6\",\"custom_7\",\"custom_8\",\"custom_9\",\"custom_10\",\"custom_11\",\"custom_12\",\"custom_13\",\"custom_14\",\"custom_15\",\"custom_16\",\"custom_17\",\"custom_18\",\"custom_19\",\"custom_20\",\"custom_21\",\"custom_22\",\"custom_23\",\"custom_24\",\"custom_25\",\"custom_26\",\"custom_27\"]",
    "customAPIs":"[{\"name\":\"电影天堂资源\",\"url\":\"http://caiji.dyttzyapi.com/api.php/provide/vod\",\"detail\":\"http://caiji.dyttzyapi.com\",\"isAdult\":false},{\"name\":\"如意资源\",\"url\":\"https://cj.rycjapi.com/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":false},{\"name\":\"暴风资源\",\"url\":\"https://bfzyapi.com/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":false},{\"name\":\"天涯资源\",\"url\":\"https://tyyszy.com/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":false},{\"name\":\"小猫咪资源\",\"url\":\"https://zy.xiaomaomi.cc/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":false},{\"name\":\"非凡影视\",\"url\":\"http://ffzy5.tv/api.php/provide/vod\",\"detail\":\"http://ffzy5.tv\",\"isAdult\":false},{\"name\":\"黑木耳\",\"url\":\"https://json.heimuer.xyz/api.php/provide/vod\",\"detail\":\"https://heimuer.tv\",\"isAdult\":false},{\"name\":\"360资源\",\"url\":\"https://360zy.com/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":false},{\"name\":\"iqiyi资源\",\"url\":\"https://www.iqiyizyapi.com/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":false},{\"name\":\"卧龙资源\",\"url\":\"https://wolongzyw.com/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":false},{\"name\":\"华为吧资源\",\"url\":\"https://cjhwba.com/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":false},{\"name\":\"极速资源\",\"url\":\"https://jszyapi.com/api.php/provide/vod\",\"detail\":\"https://jszyapi.com\",\"isAdult\":false},{\"name\":\"豆瓣资源\",\"url\":\"https://dbzy.com/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":false},{\"name\":\"魔爪资源\",\"url\":\"https://mozhuazy.com/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":false},{\"name\":\"魔都资源\",\"url\":\"https://www.mdzyapi.com/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":false},{\"name\":\"樱花资源\",\"url\":\"https://m3u8.apiyhzy.com/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":false},{\"name\":\"百度云资源\",\"url\":\"https://api.apibdzy.com/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":false},{\"name\":\"无尽资源\",\"url\":\"https://api.wujinapi.me/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":false},{\"name\":\"旺旺短剧\",\"url\":\"https://wwzy.tv/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":false},{\"name\":\"iKun资源\",\"url\":\"https://ikunzyapi.com/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":false},{\"name\":\"CK资源\",\"url\":\"https://www.ckzy1.com/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":true},{\"name\":\"jkun资源\",\"url\":\"https://jkunzyapi.com/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":true},{\"name\":\"百万资源\",\"url\":\"https://api.bwzym3u8.com/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":true},{\"name\":\"souav资源\",\"url\":\"https://api.souavzy.vip/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":true},{\"name\":\"155资源\",\"url\":\"https://155api.com/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":true},{\"name\":\"lsb资源\",\"url\":\"https://apilsbzy1.com/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":true},{\"name\":\"黄色仓库\",\"url\":\"https://hsckzy.vip/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":true},{\"name\":\"玉兔资源\",\"url\":\"https://yutuzy10.com/api.php/provide/vod\",\"detail\":\"\",\"isAdult\":true}]",
    "yellowFilterEnabled":"false",
    "adFilteringEnabled":"true",
    "doubanEnabled":"true",
    "hasInitializedDefaults":"true",
    "viewingHistory":"[{\"title\":\"周四推理俱乐部\",\"directVideoUrl\":\"https://vod.360zyx.vip/20250828/2ywresse/index.m3u8\",\"url\":\"player.html?url=https%3A%2F%2Fvod.360zyx.vip%2F20250828%2F2ywresse%2Findex.m3u8&title=%E5%91%A8%E5%9B%9B%E6%8E%A8%E7%90%86%E4%BF%B1%E4%B9%90%E9%83%A8&source=custom_8&source_code=custom_8&id=78709&index=0&position=2\",\"episodeIndex\":0,\"sourceName\":\"custom_8\",\"vod_id\":\"78709\",\"sourceCode\":\"custom_8\",\"showIdentifier\":\"custom_8_78709\",\"timestamp\":1757134880859,\"playbackPosition\":5.222343,\"duration\":7301.240000000008,\"episodes\":[\"https://vod.360zyx.vip/20250828/2ywresse/index.m3u8\"]}]",
    "videoSearchHistory":"[]"
    },
    "hash":"fb3c85f8b08e9087689d5608bffa4ec50e8c9217c5cec876879b1342b43d7bfd"}
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    }
    //ARCHIVE https://telegra.ph/APIs-08-12
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
