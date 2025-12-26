import microApp, { EventCenterForMicroApp } from '@micro-zoe/micro-app'
import { useMicroAppStore } from '@/store/microApp'
import { addMiroAppDataListener } from '@/utils/microAppDataListener'

export async function initMicroApp() {
  const { apps } = useMicroAppStore()

  // const loaders = [
  //   {
  //     loader(code: string) {
  //       if (process.env.NODE_ENV === 'development') {
  //         code = code.replace(/(from|import)(\s*['"])(\/sub-name\/)/g, (all) => {
  //           return all.replace('/sub-name/', 'http://localhost:8888/sub-name/')
  //         })
  //       }
  //       return code
  //     }
  //   }
  // ]

  microApp.start({
    'disable-memory-router': true, // 关闭虚拟路由系统
    'disable-patch-request': true, // 关闭对子应用请求的拦截
    // plugins: {
    //   modules: {
    //     subApp: loaders,
    //     subAppKeepAlive: loaders
    //   }
    // },
    // 预加载
    preFetchApps() {
      return apps.map((item) => ({
        name: item.name,
        url: item.url,
        disableSandbox: true
      }))
    }
  })

  // subApp通信对象
  // window.eventCenterForSubApp = new EventCenterForMicroApp('subApp')

  addMiroAppDataListener()
}
