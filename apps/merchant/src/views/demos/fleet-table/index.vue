<template>
  <flt-table
    ref="tableRef"
    layout-style="standard"
    table-name="Account"
    :tools-bar="toolsBar"
    :columns="tableColumns"
    :search-fields="searchFields"
    :get-table-data="getTableData"
    :default-page-size="20"
    :if-table-cache="true"
    show-aside
    enable-edit
    enable-delete
    cache-key="demo-standard"
    :if-skeleton="true"
    :generate-key="generateKey"
    :table-props="{
      highlightCurrentRow: true,
    }"
    style="height: 400px"
    @operation-click="handleOperationClick"
    @selection-change="handleSelectionChange"
  >
    <template #slotUserName="{ row }">
      <div class="flex">
        <flt-avatar :name="row.userName" />
        <div style="margin-left: 8px">
          {{ row.userName }}<br />{{ row.email }}
        </div>
      </div>
    </template>
    <!-- 右侧详情 -->
    <template #asideDetail="{ row }">
      <div>这里展示详情{{ row }}</div>
    </template>
    <!-- 右侧编辑状态内容 -->
    <template #asideEdit="{ row }"> 开始编辑：{{ row.userName }} </template>
    <template v-if="selectionRows.length > 0" #footLeft>
      <flt-table-selection
        :table-ref="tableRef"
        :selection-rows="selectionRows"
        :if-show-check="true"
        type="standard"
      >
        <el-tooltip effect="dark" content="Secondary" placement="top">
          <el-button text square :icon="icon" />
        </el-tooltip>
        <el-tooltip effect="dark" content="Secondary" placement="top">
          <el-button text square :icon="icon" />
        </el-tooltip>
        <i class="line" />
        <el-tooltip effect="dark" content="Secondary" placement="top">
          <el-button text square :icon="icon" />
        </el-tooltip>
      </flt-table-selection>
    </template>
  </flt-table>
</template>

<script lang="ts" setup>
import { h, markRaw, ref } from 'vue'

const icon = h('i', {
  class: 'flt-icon icon-ic_line_clientapp',
})

const tableRef = ref()

const toolsBar = [
  'refresh',
  {
    is: 'el-button',
    props: {
      innerText: 'Create User',
      type: 'primary',
    },
  },
  '|',
  'filter',
  'setting',
  'density',
  {
    is: 'reset',
    props: {
      style: {
        marginLeft: 'auto',
      },
    },
  },
]

// 字段key
const enum PROPS {
  USER_NAME = 'userName',
  EMAIL = 'email',
  ROLE = 'role',
  CREATED = 'created',
  LAST_LOGIN_TIME = 'lastLoginTime',
  STATUS = 'status',
}

// 字段显示名
const enum LABEL {
  USER_NAME = 'User',
  EMAIL = 'email',
  ROLE = 'Role',
  CREATED = 'Created',
  LAST_LOGIN_TIME = 'Last Login Time',
  STATUS = 'Status',
}

//table列表数据
const getTableData = async (a) => {
  const { data, total } = await mockData()
  console.log('a:', a)
  return Promise.resolve({ list: data, total })
}

function handleOperationClick(...args) {
  console.log('handleOperationClick', ...args)
}

const selectionRows = ref([])
function handleSelectionChange(args) {
  console.log(args, 119)
  selectionRows.value = args
}

function generateKey(key) {
  const userId = 'standard-100001'
  return userId + key
}

const actionColumns = markRaw({
  width: 100,
  actionList: [
    {
      actionType: 'edit',
      text: '编辑',
      i18n: false,
    },
  ],
})

const tableColumns = markRaw([
  {
    label: 'Selection',
    prop: '',
    configurable: true,
    visible: true,
    type: 'selection',
    width: 50,
  },
  // {
  //   label: 'Index',
  //   prop: 'index',
  //   configurable: true,
  //   visible: true,
  //   type: 'index',
  //   width: 100,
  //   actionMore: false,
  // },
  {
    label: LABEL.USER_NAME,
    prop: PROPS.USER_NAME,
    configurable: true,
    width: 200,
    slotName: 'slotUserName',
  },
  {
    label: LABEL.ROLE,
    prop: PROPS.ROLE,
    minWidth: 170,
    configurable: true,
    sortable: false,
  },
  {
    label: LABEL.CREATED,
    prop: PROPS.CREATED,
    configurable: true,
    width: 180,
    formatter: {
      type: 'date',
    },
  },
  {
    label: LABEL.LAST_LOGIN_TIME,
    prop: PROPS.LAST_LOGIN_TIME,
    configurable: true,
    minWidth: 180,
    formatter: {
      type: 'date',
    },
  },
  {
    label: LABEL.STATUS,
    prop: PROPS.STATUS,
    configurable: true,
    minWidth: 110,
    sortable: false,
    actionMore: ['pin'],
    formatter: {
      type: 'tag',
      formatMap: [
        {
          value: 'Actived',
          type: 'success',
          label: 'Actived',
          // i18nKey: '',
        },
        {
          value: 'Inactived',
          type: 'info',
          label: 'Inactived',
          // i18nKey: '',
        },
        {
          value: 'Pending',
          type: 'warning',
          label: 'Pending',
          // i18nKey: '',
        },
      ],
    },
  },
])
const searchFields = markRaw([
  {
    prop: 'contry',
    i18n: false,
    placeholder: 'placeholder',
    subLabel: 'Contry',
    type: 'select_api',
    defaultVisible: true,
    conditional: {
      hide: '${userName} == "dony"',
    },
  },
  {
    prop: 'userName',
    ifMaster: true,
    defaultVisible: true,
    placeholder: 'placeholder',
    subLabel: 'Loaction',
    i18n: false,
    type: 'text',
    conditional: {
      reset: 'if(${contry} !== ${_old_contry}){ return ""}',
    },
    props: {
      style: { width: '256px' },
    },
  },
  {
    prop: 'status',
    subLabel: 'Status',
    i18n: false,
    is: 'flt-cascader-field',
    props: {
      props: { multiple: true },
      options: [
        {
          value: '1',
          label: 'Bug',
          children: [
            {
              value: '1-1',
              label: 'Normal',
            },
            {
              value: '1-2',
              label: 'Low',
            },
          ],
        },
        {
          value: '2',
          label: 'Technology',
          children: [
            {
              value: '1-1',
              label: 'JS',
            },
            {
              value: '2-2',
              label: 'Java',
            },
          ],
        },
      ],
    },
  },
])

function mockData() {
  return Promise.resolve({
    total: 100,
    data: [
      {
        id: '992a3dc4-9439-436a-9b52-d5998b624f8c',
        userName: 'Alinda',
        email: 'alinda@a.com',
        role: 'PPS HK Office, View Only',
        status: 'Pending',
        created: 1704793377000,
        lastLoginTime: 1704793377000,
      },
      {
        id: '882a3dc4-9439-436a-9b52-d5998b624f8c',
        userName: 'Tlinda',
        email: 'Tlinda@a.com',
        role: 'PPS HK Office, View Only',
        status: 'Inactived',
        created: 1704792377000,
        lastLoginTime: 1704792377000,
      },
      {
        id: '772a3dc4-9439-436a-9b52-d5998b624f8c',
        userName: 'Hlinda',
        email: 'hlinda@a.com',
        role: 'PPS HK Office, View Only',
        status: 'Actived',
        created: 1704792377000,
        lastLoginTime: 1704792377000,
      },
    ],
  })
}
</script>
