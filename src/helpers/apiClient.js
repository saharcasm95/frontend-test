
const ApiUrl = 'http://35.201.2.209/';

const header = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

export const initializeToken = (token) => {
  header.authorization = 'JWT ' + token;
  console.log("token:: ", token)
  localStorage.setItem('jwtTestApp', token);
}

export const get = (url = '') => {
  console.log("checking url", ApiUrl + url);
  return new Promise((resolve, reject) => {
	 fetch(
      ApiUrl + url ,
      {
        method: 'GET',
        headers: header,
      }
    ).then((response)=> {
      if(response.ok)
        return (resolve(response.json()));
      else return reject(response);
    })
  });
}

export function post (url = '', payload) {
    console.log("Post api testing!!!!!", ApiUrl + url);
  return new Promise((resolve, reject) => {
    return fetch(
      ApiUrl + url,
      {
        method: 'POST',
        headers: header,
        body: JSON.stringify(payload)
      }
    ).then((response) => {
      console.log(response.json());
      if(response.ok)
        return (resolve(response.json()));
      else return reject(response);
    })
  });
}
