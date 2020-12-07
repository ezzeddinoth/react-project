import axios from 'axios';

export async function getPerson() {
    let data;
    await axios.get(`/person/all`)
          .then(res => {
            const persons = res.data;
            data = persons;
    })
    return data;
}

export async function deletePerson(id) {
  await axios.delete(`/person/person?id=`+id)
      //TODO Check...
  return true;
}

export async function updatePerson(person) {

  axios.put(`/person/person`,  person)
  .then(response => {
    console.log(response)
}).catch(error => {
    console.log(error.response)
})
}

export async function savePerson(person) {
axios.post(`/person/person`, 
  person
)
.then(function (response) {
  console.log(response);
})
}