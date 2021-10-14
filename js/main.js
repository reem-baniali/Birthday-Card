// creat data
const data = [
  {
    name: "reem",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWt9Hy-lU0y1qgSlsAxgsmP_ouC8W6JBO3k1aKK6xhX-fT2kaal7tspGkDM1G3yMKffQ&usqp=CAU",
    age: 27,
    dob: "1 Oct 1994",
  },
  {
    name: "leen",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWt9Hy-lU0y1qgSlsAxgsmP_ouC8W6JBO3k1aKK6xhX-fT2kaal7tspGkDM1G3yMKffQ&usqp=CAU",
    age: 21,
    dob: "14 Oct 1999",
  },

  {
    name: "ahmad",
    img: "https://www.pngfind.com/pngs/m/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png",
    age: 27,
    dob: "15 may 1992",
  },

  {
    name: "mohammed",
    img: "https://www.pngfind.com/pngs/m/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png",
    age: 27,
    dob: "14 Oct 1996",
  },

  {
    name: "hazem",
    img: "https://www.pngfind.com/pngs/m/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png",
    age: 27,
    dob: "14 Oct ",
  },
];

//target cards container
let cardContainer = document.querySelector(".cards-container");

//access the date
let today = new Date();

//convert it from obj to string
let todayString = today.toString();

//make array contain day and month by slice method
let dayDate = [todayString.slice(8, 11), todayString.slice(4, 7)];

//use join method to convert dayDate array vlaue without comma separator
let dayDateString = dayDate.join("");

//declear counter
let counter = 0;

//use forEach method to loop through data array
data.forEach((person) => {
  //markup html
  const markup = `
    <div class="card-elemants">
    <img src="${person.img}" alt="birtday_image" class="birtday_image" >
    <div>
        <h4>${person.name}</h4>
        <small>${person.age}</small>
    </div>
    </div> `;

  //apply condition to display the target person
  if (person.dob.includes(dayDateString)) {
    counter++;

    //Append card container and display it on the screen
    cardContainer.insertAdjacentHTML("beforeend", markup);
  }
});

//declare Header and write card title
let header = document.querySelector("#header");
header.innerHTML = `${counter} birthdays today`;

//add event listener to clear button
let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearCards);

//declare function to clear the card
function clearCards() {
  cardContainer.innerHTML = "";
  clearBtn.innerHTML = "Show ";
}

//declare body variable
let body = document.querySelector("body");

//declare theme buttons and add event listener to them
let blueBtn = document.querySelector("#blue");
blueBtn.addEventListener("click", blue);

let greenBtn = document.querySelector("#green");
greenBtn.addEventListener("click", green);

let darkBtn = document.querySelector("#black");
darkBtn.addEventListener("click", dark);

//write change color functions
function blue() {
  body.style.background = "blue";
  clearBtn.style.background = "blue";
}

function green() {
  body.style.background = "green";
  clearBtn.style.background = "green";
}

function dark() {
  body.style.background = "black";
  clearBtn.style.background = "black";
}
