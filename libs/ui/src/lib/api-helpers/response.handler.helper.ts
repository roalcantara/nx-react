export const handleResponse = (res: Response) => {
  if (!res.ok) {
    throw new Error('Failed to fetch..')
  }
  return res.json()
}
