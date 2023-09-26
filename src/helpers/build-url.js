export const buildURL = (path, queryParams) =>
  Object.assign(new URL(path), { search: new URLSearchParams(queryParams).toString() }).toString();
