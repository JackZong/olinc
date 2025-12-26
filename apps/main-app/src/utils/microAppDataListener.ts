/*
 * ===========================================================================================
 * = COPYRIGHT
 *          PAX Computer Technology (Shenzhen) Co., Ltd. PROPRIETARY INFORMATION
 *   This software is supplied under the terms of a license agreement or nondisclosure
 *   agreement with PAX Computer Technology (Shenzhen) Co., Ltd. and may not be copied or
 *   disclosed except in accordance with the terms in that agreement.
 *     Copyright (C) 2022-2023 PAX Computer Technology (Shenzhen) Co., Ltd. All rights reserved.
 * Description: // Detail description about the function of this module,
 *             // interfaces with the other modules, and dependencies.
 * Revision History:
 * Date                  Author                 Action
 * 2025/12/10            PAX                    Create
 * ===========================================================================================
*/

import microApp from '@micro-zoe/micro-app'

import { useMicroAppStore } from '@/store/microApp'
import type { DataListenerParam, MessageData } from '@/types/microAppDataListenerTypes'

export function addMiroAppDataListener() {
  const { apps } = useMicroAppStore()

  const listener = (e: DataListenerParam<MessageData>) => {
    const { type, data } = e
    if (type === 'message') {
      const { info, type, from } = data
      console.log(`收到来自${from}的${type}消息: `, info)
      // notification[type]({
      //   message: `来自【${from}】的消息`,
      //   description: info
      // })
    }
  }

  apps.forEach((item) => {
    microApp.addDataListener(item.name, listener)
    microApp.addDataListener(item.name + 'KeepAlive', listener)
  })
}
