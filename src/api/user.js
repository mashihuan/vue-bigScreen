import request2 from '@/utils/request2'

export function login(data) {
  return request2({
    url: '/systemservice/v1/sys/login',
    method: 'POST',
    data
  })
}

export function userInfo(data) {
  return request2({
    url: '/systemservice/v1/sys/getUserFromSessionToken',
    method: 'GET',
    params: data
  })
}

export function logout(data) {
  return request2({
    url: '/systemservice/v1/sys/logout',
    method: 'POST',
    data
  })
}
