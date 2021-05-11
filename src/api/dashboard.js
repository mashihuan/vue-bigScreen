import request from '@/utils/request'

// 实时数据
export function currentData(data) {
  return request({
    url: '/screem/t006-today-data/list',
    method: 'POST',
    data
  })
}

// 人员统计
export function personnel(data) {
  return request({
    url: '/screem/t001-person-statistics/list',
    method: 'POST',
    data
  })
}
