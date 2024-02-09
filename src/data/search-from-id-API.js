import { API_KEY, BASE_URL_ID } from "../const";

async function searchFromIdAPI(id) {
  const params = new URLSearchParams();
  params.append("id", id);
  params.append("appid", API_KEY);
  const url = `${BASE_URL_ID}?${params.toString()}`;
    console.log(url);
  try {
    let response = await fetch(url);
    // console.log(await response.json());
    return await response.json();
  } catch (err) {
    console.log("error", err);
  }
}

export default searchFromIdAPI;
