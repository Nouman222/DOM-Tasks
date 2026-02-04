const userDetails = [
  { id: 1, name: "Nouman Ahmad", email: "nouman@gmail.com", age: 22, address: { city: "Peshawar", country: "Pakistan" }, skills: { frontend: ["HTML", "CSS", "JS"], backend: ["Node.js"] } },
  { id: 2, name: "Ali Khan", email: "ali@gmail.com", age: 25, address: { country: "Pakistan" }, skills: { frontend: ["HTML", "CSS"] } },
  { id: 3, name: "Sara Ahmed", email: "sara@gmail.com", address: { city: "Lahore" }, skills: { backend: ["Python", "Django"] } },
  { id: 4, name: "Usman", age: 28, address: {}, skills: { frontend: ["React"], backend: ["Node.js", "MongoDB"] } },
  { id: 5, name: "Ayesha", email: "ayesha@gmail.com", age: 30, address: { city: "Karachi", country: "Pakistan" }, skills: { frontend: ["Vue.js"], backend: ["PHP"] } },
  { id: 6, name: "Bilal", age: 24, address: { city: "Islamabad" }, skills: { backend: ["Java", "Spring"] } },
  { id: 7, name: "Hassan", email: "hassan@gmail.com", address: { country: "Pakistan" }, skills: { frontend: ["HTML"] } },
  { id: 8, name: "Fatima", email: "fatima@gmail.com", age: 26, address: { city: "Multan", country: "Pakistan" }, skills: { frontend: ["React"], backend: ["Node.js"] } },
  { id: 9, name: "Zain", age: 23, address: {}, skills: { backend: ["Python"] } },
  { id: 10, name: "Sana", email: "sana@gmail.com", address: { city: "Faisalabad" }, skills: { frontend: ["Angular"] } },
  { id: 11, name: "Omar", email: "omar@gmail.com", age: 29, address: { country: "Pakistan" }, skills: { frontend: ["HTML", "CSS"], backend: ["Node.js"] } },
  { id: 12, name: "Maryam", age: 22, address: { city: "Peshawar", country: "Pakistan" }, skills: { backend: ["Django"] } },
  { id: 13, name: "Ahmed", email: "ahmed@gmail.com", address: {}, skills: { frontend: ["Vue.js"] } },
  { id: 14, name: "Hina", age: 27, address: { city: "Karachi" }, skills: { frontend: ["React"], backend: ["PHP"] } },
  { id: 15, name: "Tariq", email: "tariq@gmail.com", age: 31, address: { country: "Pakistan" }, skills: { backend: ["Node.js"] } },
  { id: 16, name: "Iqra", email: "iqra@gmail.com", address: { city: "Lahore", country: "Pakistan" }, skills: { frontend: ["HTML", "CSS", "JS"] } },
  { id: 17, name: "Shahid", age: 28, address: {}, skills: { frontend: ["Angular"], backend: ["Java"] } },
  { id: 18, name: "Rabia", email: "rabia@gmail.com", address: { city: "Islamabad" }, skills: { frontend: ["React"] } },
  { id: 19, name: "Farhan", age: 25, address: { country: "Pakistan" }, skills: { backend: ["Python", "Flask"] } },
  { id: 20, name: "Neha", email: "neha@gmail.com", age: 24, address: { city: "Multan", country: "Pakistan" }, skills: { frontend: ["Vue.js"], backend: ["PHP"] } }
];


const cardContainer = document.getElementById("cardContainer");

userDetails.forEach(user => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${user?.name ? user.name:"No Name"}</h3>
    <p><b>Email:</b> ${user?.email ? user.email:"No Email"}</p>
    <p><b>Age:</b> ${user?.age ? user.age:"No Age"}</p>
    <p><b>City:</b> ${user?.address?.city ? user?.address?.city:"Not Found" }</p>
    <p><b>Country:</b> ${user?.address?.country ? user?.address?.country:"Not Found"}</p>
  `;


  cardContainer.appendChild(card);
});