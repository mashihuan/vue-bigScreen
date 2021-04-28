import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/systemservice/v1/sys/login',
    method: 'POST',
    data
  })
}

export function userInfo(data) {
  return request({
    url: '/systemservice/v1/sys/getUserFromSessionToken',
    method: 'GET',
    params: data
  })
}

export function logout(data) {
  return request({
    url: '/systemservice/v1/sys/logout',
    method: 'POST',
    data
  })
}
