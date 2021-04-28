import request from '@/utils/request'

export function basicInfo(data) {
  return request({
    url: '/archiveservice/v1/portal/basicInfo',
    method: 'POST',
    data
  })
}

