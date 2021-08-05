type LoadDataParams = {
  search: string,
  sortOrder: string,
  searchBy: string,
  sortBy: string
}

export function loadData(url: string, params?: LoadDataParams) {
  let resultUrl = url;
  if (params !== undefined) {
    const queryParams = new URLSearchParams(Object.entries(params));
    resultUrl = `${url}?${queryParams}`;
  }

  return fetch(resultUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Could not fetch ${response.url} status: ${response.status}`
        );
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error (error + error.message);
    });
}
