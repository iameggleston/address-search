
import axios from "axios";
// API叩いた後に所得できるデータの型
type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number }, place_id: string } }[];
  status: 'OK' | 'ZERO_RESULTS';
}

const searchAddress = (inputVal: string, GOOGLE_API_KEY: string, setPosition: Function) => {
  // encodeURI() →URI (Uniform Resource Identifier) としてエンコードされた指定された文字列を返すメソッド
  axios.get<GoogleGeocodingResponse>(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
      inputVal,
    )}&key=${GOOGLE_API_KEY}`
  )
    .then(response => {
      if(response.data.status !==  "OK"){
        throw new Error('座標を取得できませんでした。');
      }
      setPosition({location: response.data.results[0].geometry.location, place_id: response.data.results[0].geometry.place_id});
    })
    .catch(err => {
      alert(err.message);
      console.log(err);
    });
}

export default searchAddress;