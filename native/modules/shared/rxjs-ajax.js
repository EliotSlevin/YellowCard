export const requestJson = (url, method, token, body) => {
  const settings = {
    url, method,
    headers: { 'Authorization': `Bearer ${token}` },
    crossDomain: true,
    contentType: 'application/json; charset=utf-8',
    responseType: 'json',
  }

  if (body) settings.body = body

  return settings
}