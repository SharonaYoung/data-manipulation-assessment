const people = [
  {
    "name": "Angela",
    "age": 64,
    "occupation": "Actor"
  },
  {
    "name": "Steve",
    "age": 42,
    "occupation": "Musician"
  },
  {
    "name": "Will",
    "age": 20,
    "occupation": "Comedian"
  },
  {
    "name": "Lisa",
    "age": 35,
    "occupation": "Artist"
  },
  {
    "name": "Thomas",
    "age": 37,
    "occupation": "Dentist"
  },
  {
    "name": "Brian",
    "age": 27,
    "occupation": "Teacher"
  },
  {
    "name": "Megan",
    "age": 19,
    "occupation": "Actor"
  },
  {
    "name": "Charles",
    "age": 23,
    "occupation": "Developer"
  },
  {
    "name": "Theresa",
    "age": 42,
    "occupation": "Secretary"
  },
  {
    "name": "Seth",
    "age": 38,
    "occupation": "Writer"
  },
  {
    "name": "Greg",
    "age": 41,
    "occupation": "Actor"
  },
  {
    "name": "Olivia",
    "age": 30,
    "occupation": "Detective"
  },
]

// function to display items in list
const peopleListEl = document.querySelector('ul');
function showList(people) {
  const friends = people.map(friend => `
  <li>
    <h2>${friend.name} is ${friend.age} years old</h2>
  </li>
`)
  peopleListEl.innerHTML=friends.join("");
}
showList(people)

// target button elements
const listAllBtn = document.querySelector('#all');
const olderBtn = document.querySelector('#older');
const actorBtn = document.querySelector('#actors');
const ageBtn = document.querySelector('#age');

// -------button functions------
// show all people
listAllBtn.addEventListener('click', () => {
  showList(people);
});

// filter to show people older than 35
olderBtn.addEventListener('click', () => {
  const older = people.filter(friend => friend.age > 35)
  showList(older);
});

// filter to show actors
actorBtn.addEventListener('click', () => {
  const actors = people.filter(friend => friend.occupation === "Actor");
  showList(actors);
});

// display all people with age in 5 years
ageBtn.addEventListener('click', () => {
  const newAge = people.map(friend =>{
    const friendCopy = {...friend}
    friendCopy.age += 5;
    return friendCopy;
  });
  showList(newAge);
});
