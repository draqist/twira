const {REACT_APP_BEARER_TOKEN} = process.env
var myHeaders = new Headers();
myHeaders.append("Authorization", `${REACT_APP_BEARER_TOKEN}`);
myHeaders.append("Cookie", "guest_id=v1%3A164229841681311547; guest_id_ads=v1%3A164229841681311547; guest_id_marketing=v1%3A164229841681311547; personalization_id=\"v1_J6y25CTLm2vfZTLiTiOH/w==\"");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.twitter.com/2/tweets/search/stream", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));