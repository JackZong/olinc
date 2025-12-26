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
// import { useAppConfig } from '@olinc/hooks';

export const olincOperatorAppEntry = import.meta.env.VITE_OLINC_OPERATOR;
export const olincAdminAppEntry = import.meta.env.VITE_OLINC_ADMIN;
export const olincIsvAppEntry = import.meta.env.VITE_OLINC_ISV;
export const olincMerchantAppEntry = import.meta.env.VITE_OLINC_MERCHANT;

export const apps = [
  {
    name: 'operator',
    url: olincOperatorAppEntry,
    baseroute: '/operator',
  },
  {
    name: 'admin',
    url: olincAdminAppEntry,
    baseroute: '/admin',
  },
  {
    name: 'isv',
    url: olincIsvAppEntry,
    baseroute: '/isv',
  },
  {
    name: 'merchant',
    url: olincMerchantAppEntry,
    baseroute: '/merchant',
  },
];
