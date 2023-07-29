// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');
const upmenu = document.querySelectorAll('.up');


allDropdown.forEach(item=> {
	const a = item.parentElement.querySelector('a:first-child');
	a.addEventListener('click', function (e) {
		e.preventDefault();

		if(!this.classList.contains('active')) {
			allDropdown.forEach(i=> {
				const aLink = i.parentElement.querySelector('a:first-child');

				aLink.classList.remove('active');
				i.classList.remove('show');
			})
		}

		this.classList.toggle('active');
		item.classList.toggle('show');
	})
})

// allDropdown.forEach(item=> {
// 	const a = item.parentElement.querySelector('a:first-child');
// 	a.addEventListener('click',  (e) =>{
// 		e.preventDefault();
		
	
// 	if (this.classlist.contains('active')){
// 		a
// 			a.classList.remove('active');
// 			item.classList.remove('show');
		
		
	
// }this.classlist.remove('active')
// 		item.classList.remove('show');
// )



// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');

if(sidebar.classList.contains('hide')) {
	allSideDivider.forEach(item=> {
		item.textContent = '-'
	})
	allDropdown.forEach(item=> {
		const a = item.parentElement.querySelector('a:first-child');
		a.classList.remove('active');
		item.classList.remove('show');
	})
} else {
	allSideDivider.forEach(item=> {
		item.textContent = item.dataset.text;
	})
}

toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

	if(sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})

		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})




sidebar.addEventListener('mouseleave', function () {
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})
	}
})



sidebar.addEventListener('mouseenter', function () {
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item => {
			item.textContent = item.dataset.text;
		})
	}
})




// PROFILE DROPDOWN
const profile = document.querySelector('nav .profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');

imgProfile.addEventListener('click', function () {
	dropdownProfile.classList.toggle('show');
})




// MENU
const allMenu = document.querySelectorAll('main .content-data .head .menu');

allMenu.forEach(item=> {
	const icon = item.querySelector('.icon');
	const menuLink = item.querySelector('.menu-link');

	icon.addEventListener('click', function () {
		menuLink.classList.toggle('show');
	})
})



window.addEventListener('click', function (e) {
	if(e.target !== imgProfile) {
		if(e.target !== dropdownProfile) {
			if(dropdownProfile.classList.contains('show')) {
				dropdownProfile.classList.remove('show');
			}
		}
	}

	allMenu.forEach(item=> {
		const icon = item.querySelector('.icon');
		const menuLink = item.querySelector('.menu-link');

		if(e.target !== icon) {
			if(e.target !== menuLink) {
				if (menuLink.classList.contains('show')) {
					menuLink.classList.remove('show')
				}
			}
		}
	})
})





// PROGRESSBAR
const allProgress = document.querySelectorAll('main .card .progress');

allProgress.forEach(item=> {
	item.style.setProperty('--value', item.dataset.value)
})






// APEXCHART
var options = {
  series: [{
  name: 'series1',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: 'series2',
  data: [11, 32, 45, 32, 34, 52, 41]
}],
  chart: {
  height: 350,
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  type: 'datetime',
  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
},
tooltip: {
  x: {
    format: 'dd/MM/yy HH:mm'
  },
},
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

const users= {
	user1:"User 1",
	user2:"User 2",
	user3:"User 3",
	user4:"User 4",
	user5:"User 5",
	user6:"User 6",
	user7:"User 7",
}
const admins={
	admin1:"Admin 1",
	admin2:"Admin 2",
	admin3:"Admin 3",
	admin4:"Admin 4",
	admin5:"Admin 5",
	admin6:"Admin 6",
	admin7:"Admin 7",
}
const products ={
	product1:"Product 1",
	product2:"Product 2",
	product3:"Product 3",
	product4:"Product 4",
	product5:"Product 5",
	product6:"Product 6",
	product7:"Product 7",
}
// fhfhfhf
// const addUserLink = document.querySelector('.addUser');
// const addUserForm = document.getElementById('addUserForm');
// const userForm = document.getElementById('userForm');
// const usersList = document.getElementById('usersList');

// // const users = []; // Array to store user data

// addUserLink.addEventListener('click', function (e) {
//   e.preventDefault();
//   addUserForm.classList.remove('hidden');
//   addUserForm.scrollIntoView({ behavior: 'smooth' });
// });

// userForm.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const age = document.getElementById('age').value;
//   const gender = document.getElementById('gender').value;
//   const role = document.getElementById('role').value;

//   const newUser = { name, email, age, gender, role };
//   users.push(newUser);

//   createUserDiv(newUser);
//   userForm.reset();
// });

// function createUserDiv(user) {
//   const userDiv = document.createElement('div');
//   userDiv.classList.add('user-item');
//   userDiv.setAttribute('id', `user-${users.length}`);
//   userDiv.innerHTML = `
//     <h3>${user.name}</h3>
//     <p>Email: ${user.email}</p>
//     <p>Age: ${user.age}</p>
//     <p>Gender: ${user.gender}</p>
//     <p>Role: ${user.role}</p>
//   `;
//   usersList.appendChild(userDiv);
// }
// // Convert users, admins, and products to arrays
// const usersArray = Object.values(users);
// const adminsArray = Object.values(admins);
// const productsArray = Object.values(products);

// // Function to create user div
// function createUserDiv(username) {
//   const userDiv = document.createElement('div');
//   userDiv.classList.add('user-item');
//   userDiv.innerHTML = `
//     <h3>${username}</h3>
//     <p>Email: ${username.toLowerCase().replace(/\s/g, '')}@example.com</p>
//     <p>Age: ${Math.floor(Math.random() * 30) + 20}</p>
//     <p>Gender: ${Math.random() < 0.5 ? 'Male' : 'Female'}</p>
//     <p>Role: User</p>
//   `;
//   usersList.appendChild(userDiv);
// }

// // Loop through the users array and create user divs
// usersArray.forEach(user => createUserDiv(user));
const addUserLink = document.querySelector('.addUser');
addUserLink.addEventListener('click', (e) => {
  e.preventDefault();
  const form = document.getElementById('addUserForm');
  form.style.display = 'block';
  form.scrollIntoView({ behavior: 'smooth' });
});