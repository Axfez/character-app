export const GetIdPipe = ({ url }) => {
  const parts = url.split('/')
  return parts.pop()
}
