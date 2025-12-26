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

export enum EventTypes {
  message = 'message'
}

export enum MessageTypes {
  success = 'success',
  warn = 'warn',
  error = 'error',
  info = 'info'
}

export interface MessageData {
  info: string
  type: MessageTypes
  from: string
}

export interface DataListenerParam<T> {
  type: EventTypes
  data: T
}
