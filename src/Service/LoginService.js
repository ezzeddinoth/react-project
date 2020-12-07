import axios from 'axios';

export async function getRolle(email, password) {
  let data;
  await axios.get(`/login1/credentials?email=` + email + `&password=` + password)
    .then(res => {
      const login = res.data;
      data = login;
    })
  let data1 = [];
  data1.push(data);
  return data;
}