const {REACT_APP_BEARER_TOKEN} = process.env
export const getUser = () => {
  let data = JSON.stringify({
    "method": "get",
    "url": "https://api.twitter.com/2/users/by/username/ose4g1",
    "Authorization": `${REACT_APP_BEARER_TOKEN}`
});

let config = {
		method: 'post',
		url: 'https://ose4g-redirect-api.herokuapp.com',
    headers: {
    'Authorization': `${REACT_APP_BEARER_TOKEN}`,
    'Content-Type': 'application/json'
  },
    data: data
};

axios(config)
.then((response) => {
		console.log(JSON.stringify(response.data));
})
.catch((error) => {
		console.log(error);
});
}
export const TwitterFeed = async () => {
  const setRules = async () => {
    let rules = JSON.stringify({
        method: 'post',
        url: 'https://api.twitter.com/2/tweets/search/stream/rules',
        headers: { 
            'Authorization': `${REACT_APP_BEARER_TOKEN}`, 
            'Content-Type': 'application/json', 
            'Cookie': 'guest_id=v1%3A164229841681311547; guest_id_ads=v1%3A164229841681311547; guest_id_marketing=v1%3A164229841681311547; personalization_id="v1_J6y25CTLm2vfZTLiTiOH/w=="'
        },
        "add": [
          {
            "value": "",
            "tag": ""
          }
        ]
    });
    let rulesConfig = {
        method: 'post',
        url: 'https://ose4g-redirect-api.herokuapp.com',
        headers: { 
            'Authorization': `${REACT_APP_BEARER_TOKEN}` , 
            'Content-Type': 'application/json', 
            'Cookie': 'guest_id=v1%3A164229841681311547; guest_id_ads=v1%3A164229841681311547; guest_id_marketing=v1%3A164229841681311547; personalization_id="v1_J6y25CTLm2vfZTLiTiOH/w=="'
        },
        data : rules
  }

  axios(rulesConfig)
  .then((response) => {
      console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
      console.log(error);
  });
  }
  const rulesResponse = await setRules()
};
