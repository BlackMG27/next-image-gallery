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
    console.log(resJson);
    return resJson.photos;
  };
  