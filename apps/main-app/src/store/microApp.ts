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

import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { MicroApp } from '@olinc/types'
import { apps as microApps } from '@/config/appData'

export const useMicroAppStore = defineStore('microApp', () => {
  const apps = reactive<MicroApp[]>(microApps)

  // 获取被激活的应用
  const getActiveMicroApp = function (path: string) {
    return apps.find((item) => path.startsWith(item.baseroute))
  }

  return { apps, getActiveMicroApp }
})
