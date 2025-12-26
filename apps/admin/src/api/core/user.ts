import type { UserInfo } from '@olinc/types';

import { requestClient } from '@/api/request';

/**
 * 获取用户信息
 */
export async function getUserInfoApi() {
  return requestClient.get<UserInfo>('/user/info');
}
