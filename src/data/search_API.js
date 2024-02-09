import { API_KEY, BASE_URL } from "../const";

// come nel progetto precedente esegue l'api in un foglio apparte per poi importarmelo dove mi serve in questo modo ho un codice più pulito e chiaro per risolvere eventuali errori chi si possono generare
async function searchAPI(city) {
  const params = new URLSearchParams();
  params.append("q", city);
  params.append("appid", API_KEY);
  params.append("units", "metric");
  const url = `${BASE_URL}?${params.toString()}`;
  //   console.log(url);
  try {
    let response = await fetch(url);
    // console.log(await response.json());
    return await response.json();
  } catch (err) {
    console.log("error", err);
  }
}

export default searchAPI;
