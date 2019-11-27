import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home.vue'
import Apache from '@/components/apache/apache.vue'
import BhBillboard from '@/components/gameRules/bhBillboard.vue'
import GameDescription from '@/components/gameRules/gameDescription.vue'
import BhRules from '@/components/gameRules/bhRules.vue'
import HowToPlay from '@/components/gameRules/howToPlay.vue'
import KnowBountyHunter from '@/components/knowBountyHunter/knowBountyHunter.vue'
import About from '@/components/about/about.vue'
import ProductCenter from '@/components/productCenter/productCenter.vue'
import Discovery from '@/components/discovery/discover.vue'
import AssetsSafety from '@/components/assetsSafety/assetsSafety.vue'
import AboutAssets from '@/components/aboutAssets/aboutAssets.vue'
import ARdownload from '@/components/ARdownload/ARdownload.vue'
import MultimediaEntertainment from '@/components/multimediaEntertainment/multimediaEntertainment.vue'
import News from '@/components/news/news.vue'
import NewsDetail from '@/components/news/newsDetail.vue'
import Contact from '@/components/contact/contact.vue'
import Industries from '@/components/industries/industries.vue'
import Game from '@/components/game/game.vue'
import Finance from '@/components/finance/finance.vue'
import Adult from '@/components/adult/adult.vue'
import Entertainment from '@/components/entertainment/entertainment.vue'
import Sports from '@/components/sports/sports.vue'
import Pictures from '@/components/pictures/pictures.vue'
import SharedFinance from '@/components/sharedFinance/sharedFinance.vue'
import DiscoverDetail from '@/components/discoverDetail/discoverDetail.vue'
import presell from '@/components/presell/presell.vue'
import detail from '@/components/detail/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/apache',
      name: 'apache',
      component: Apache
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    // 赏金猎人了解更多
    {
      path: '/knowBountyHunter',
      name: 'knowBountyHunter',
      component: KnowBountyHunter
    },
    // 赏金猎人排行榜
    {
      path: '/bhBillboard',
      name: 'bhBillboard',
      component: BhBillboard
    },
    // 游戏介绍
    {
      path: '/gameDescription',
      name: 'gameDescription',
      component: GameDescription
    },
    // 赏金猎人游戏规则
    {
      path: '/bhRules',
      name: 'bhRules',
      component: BhRules
    },
    // 玩法介绍
    {
      path: '/howToPlay',
      name: 'howToPlay',
      component: HowToPlay
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/productCenter',
      name: 'productCenter',
      component: ProductCenter
    },
    {
      path: '/discovery',
      name: 'discovery',
      component: Discovery
    },
    {
      path: '/assetsSafety',
      name: 'assetsSafety',
      component: AssetsSafety
    },
    {
      path: '/aboutAssets',
      name: 'aboutAssets',
      component: AboutAssets
    },
    {
      path: '/ARdownload',
      name: 'ARdownload',
      component: ARdownload
    },
    {
      path: '/multimediaEntertainment',
      name: 'multimediaEntertainment',
      component: MultimediaEntertainment
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/newsDetail/:id',
      name: 'newsDetail',
      component: NewsDetail
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/industries',
      name: 'industries',
      component: Industries
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/finance',
      name: 'finance',
      component: Finance
    },
    {
      path: '/adult',
      name: 'adult',
      component: Adult
    },
    {
      path: '/entertainment',
      name: 'entertainment',
      component: Entertainment
    },
    {
      path: '/sports',
      name: 'sports',
      component: Sports
    },
    {
      path: '/pictures',
      name: 'pictures',
      component: Pictures
    },
    {
      path: '/sharedFinance',
      name: 'sharedFinance',
      component: SharedFinance
    },
    {
      path: '/DiscoverDetail',
      name: 'DiscoverDetail',
      component: DiscoverDetail
    },
    {
      path: '/presell',
      name: 'presell',
      component: presell
    }
  ]
})
