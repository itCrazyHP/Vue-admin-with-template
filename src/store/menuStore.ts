import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { RouteRecordNormalized } from 'vue-router';
import router from '@/router';
import { IMenu } from '#/menu.d'
import { RouteLocationNormalized } from 'vue-router';
import utils from '@/utils';
import { cacheEnum } from '@/enum/cacheEnum';
import { RouteLocationNormalizedLoaded } from 'vue-router';
import store from '@/utils/store';
import { RouteRecordRaw } from 'vue-router';
export default defineStore('menu', {
  state: () => {
    return {
      menus: [] as IMenu[],
      historyMenu: [] as IMenu[],
      isClose: store.get(cacheEnum.MENU_IS_CLOSE)??false,
      route:null as null|RouteLocationNormalized
    }
  },
  actions: {
    init() {
      this.getMenuByRoute()
      this.historyMenu = this.getHistoryLink()//由于进入页面就调用，获取到最新的historylink，并在之后调用addhistory（里边有localstorge.set方法自动存储），所以localstorge的历史路由会自动更新
    },
    getHistoryLink(){
      const routes=[] as RouteRecordRaw[]
      router.getRoutes().map(r=>routes.push(...r.children))//获取所有子路由，因为判断都只用子路由
      
      let menus:IMenu[] = utils.store.get(cacheEnum.HISTORY_MENU) ?? []
      return menus.filter(m=>{
        return routes.some(r=>r.name === m.route)//routes中所有name去跟localstorge中menus的每一个名字做比较，如果routes中没有menus的名字，则筛除它
      })
    },
    toggleState() {
      if (this.isClose === false) {
        this.menus.forEach(r => r.isClick = true)
      }

      this.isClose = !this.isClose
      store.set(cacheEnum.MENU_IS_CLOSE,this.isClose)
    },
    setCurrentMenu(route: RouteLocationNormalizedLoaded) {//在watch中上来就执行
      this.menus.forEach(m => {
        if (!this.isClose) {
          m.isClick = false
        }
        m.children?.forEach(c => {
          c.isClick = false
          if (c.route === route.name) {//如果选中子路由，则把父路由跟子路由设为选中模式
            m.isClick = true
            c.isClick = true
          }
        })
      })
    },
    removeHistoryMenu(menu: IMenu) {
      const index = this.historyMenu.indexOf(menu)
      this.historyMenu.splice(index, 1)
      utils.store.set(cacheEnum.HISTORY_MENU, this.historyMenu)
    },
    addHistoryMenu(route: RouteLocationNormalized) {
      if (!route.meta.menu) return
      this.route = route
      const menu: IMenu = { ...route.meta?.menu, route: route.name as string } //往数据压入meta中的属性
      const isHas = this.historyMenu.some(menu => menu.route === route.name) //注意:route是name，如果有name相同的就返回true
      if (!isHas) {//只有没有相同的才压入
        this.historyMenu.unshift(menu)
      }
      if (this.historyMenu.length > 10) {
        this.historyMenu.pop()
      }
      utils.store.set(cacheEnum.HISTORY_MENU, this.historyMenu)
    },
    getMenuByRoute() {
      this.menus = router.getRoutes().filter(route => route.children.length && route.meta.menu).map(route => {//获取带有子路由和menu信息的的路由并遍历(只有error一个路由)
        let menu = { ...route.meta.menu } //获取路由的menu信息

        menu.children = route.children.filter(route => route.meta?.menu).map(route => {//从子路由给menu添加children属性
          return { ...route.meta?.menu, route: route.name }
        }) as IMenu[]
        return menu
      }).filter(menu => menu.children?.length)
    }
  }

})
