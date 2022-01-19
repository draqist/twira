
import axios from 'axios';

export const TwitterData = () => {
  const { REACT_APP_BEARER_TOKEN } = process.env
  
  let config = {
    method: 'get',
    url: 'https://api.twitter.com/2/tweets/search/stream',
    headers: { 
      'Authorization': `${REACT_APP_BEARER_TOKEN}`, 
      'Cookie': 'guest_id=v1%3A164229841681311547; guest_id_ads=v1%3A164229841681311547; guest_id_marketing=v1%3A164229841681311547; personalization_id="v1_J6y25CTLm2vfZTLiTiOH/w=="',
      "Access-Control-Allow-Origin": "*"
    }
  };
  
  
  axios(config)
    .then(function (response) {
    const twitterData = JSON.stringify(response.data)
    console.log(twitterData);
  })
  .catch(function (error) {
    console.log(error);
  });
}
