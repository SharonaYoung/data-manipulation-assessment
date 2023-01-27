const people = [
  {
    "name": "Angela",
    "age": "64",
    "occupation": "Actor"
  },
  {
    "name": "Steve",
    "age": "42",
    "occupation": "Musician"
  },
  {
    "name": "Will",
    "age": "50",
    "occupation": "Comedian"
  },
  {
    "name": "Lisa",
    "age": "35",
    "occupation": "Artist"
  },
  {
    "name": "Thomas",
    "age": "37",
    "occupation": "Dentist"
  },
  {
    "name": "Brian",
    "age": "27",
    "occupation": "Teacher"
  },
  {
    "name": "Megan",
    "age": "24",
    "occupation": "Actor"
  },
  {
    "name": "Charles",
    "age": "23",
    "occupation": "Developer"
  },
  {
    "name": "Theresa",
    "age": "42",
    "occupation": "Secretary"
  },
  {
    "name": "Seth",
    "age": "38",
    "occupation": "Writer"
  },
  {
    "name": "Greg",
    "age": "41",
    "occupation": "Actor"
  },
  {
    "name": "Olivia",
    "age": "30",
    "occupation": "Detective"
  },
]

const peopleListEl = document.querySelector('ul');
function showList(people) {
  const friends = people.map(friend => `
  <li>
    <h2>${friend.name} is ${friend.age} years old</h2>
  </li>
`)
  peopleListEl.innerHTML=friends.join("");
}



const listAllBtn = document.querySelector('#all');
const olderBtn = document.querySelector('#older');
const actorBtn = document.querySelector('#actor');
const ageBtn = document.querySelector('#age');
showBtn.addEventListener('click', () => {
  const filtered = people.filter(person => person.age < 30);
  showList(filtered);
});


