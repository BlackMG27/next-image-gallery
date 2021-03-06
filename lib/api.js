
const apiKey = process.env.PEXELS_API_KEY;

export const getCuratedPhotos = async () => {
    const res = await fetch(
      `https://api.pexels.com/v1/curated?page=11&per_page=18`,
      { 
        headers: {
            Authorization: apiKey,
        },
      }
    );
    const resJson = await res.json();
    return resJson.photos;
  };

  export const getQueryPhotos = async (query) => {
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${query}`,
    { 
      headers: {
          Authorization: apiKey,
      },
    })
    const resJson = await res.json();
    return resJson.photos;
  };
  