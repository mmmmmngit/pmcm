export const get = async (
  path: string | undefined
): Promise<Response> => {
  const url: string = new URL((path ?? ''), process.env.FRONT_JSON_URL).toString()
  // eslint-disable-next-line @typescript-eslint/return-await
  return fetch(url)
}
