// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');

allDropdown.forEach(item => {
    const a = item.parentElement.querySelector('a:first-child');
    a.addEventListener('click', function (e) {
        e.preventDefault();

        if (!this.classList.contains('active')) {
            allDropdown.forEach(i => {
                const aLink = i.parentElement.querySelector('a:first-child');
                aLink.classList.remove('active');
                i.classList.remove('show');
            })
        }

        this.classList.toggle('active');
        item.classList.toggle('show');
    })
})

// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');

function updateSidebarState() {
    if (sidebar.classList.contains('hide')) {
        allSideDivider.forEach(item => {
            item.textContent = '-';
        });
        allDropdown.forEach(item => {
            const a = item.parentElement.querySelector('a:first-child');
            a.classList.remove('active');
            item.classList.remove('show');
        });
    } else {
        allSideDivider.forEach(item => {
            item.textContent = item.dataset.text;
        });
    }
}

function toggleSidebarState() {
    sidebar.classList.toggle('hide');
    updateSidebarState();
}

toggleSidebar.addEventListener('click', toggleSidebarState);

sidebar.addEventListener('mouseleave', function () {
    if (this.classList.contains('hide')) {
        updateSidebarState();
    }
});

sidebar.addEventListener('mouseenter', function () {
    if (this.classList.contains('hide')) {
        updateSidebarState();
    }
});

// PROFILE DROPDOWN
const profile = document.querySelector('nav .profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');

function toggleProfileDropdown() {
    dropdownProfile.classList.toggle('show');
}

imgProfile.addEventListener('click', toggleProfileDropdown);

window.addEventListener('click', function (e) {
    if (e.target !== imgProfile && e.target !== dropdownProfile) {
        if (dropdownProfile.classList.contains('show')) {
            toggleProfileDropdown();
        }
    }
});
// Rest of your code ...

// Function to show the "Add User" form
// ... (previous code remains the same)


// Seven product objects
const products = [
    {
      name: "Product 1",
      description: "Description for Product 1",
      price: 19.99,
      category: "Electronics",
    },
    {
      name: "Product 2",
      description: "Description for Product 2",
      price: 29.99,
      category: "Clothing",
    },
    {
      name: "Product 3",
      description: "Description for Product 3",
      price: 9.99,
      category: "Home & Kitchen",
    },
    {
      name: "Product 4",
      description: "Description for Product 4",
      price: 39.99,
      category: "Beauty",
    },
    {
      name: "Product 5",
      description: "Description for Product 5",
      price: 49.99,
      category: "Toys",
    },
    {
      name: "Product 6",
      description: "Description for Product 6",
      price: 14.99,
      category: "Books",
    },
    {
      name: "Product 7",
      description: "Description for Product 7",
      price: 24.99,
      category: "Sports & Outdoors",
    },
  ];
  
  // Three admin objects
  const admins = [
    {
      username: "admin1",
      email: "admin1@example.com",
      role: "Administrator",
    },
    {
      username: "admin2",
      email: "admin2@example.com",
      role: "Administrator",
    },
    {
      username: "admin3",
      email: "admin3@example.com",
      role: "Administrator",
    },
  ];
  
  // Now you have an array of seven product objects and an array of three admin objects
  

// Function to show the "Add User" form
function showAddUserForm() {
	const addUserForm = document.getElementById('addUserForm');
	addUserForm.style.display = 'block';
	setTimeout(() => {
	  addUserForm.scrollIntoView({ behavior: 'smooth' });
	}, 100); // Adjust the delay as needed
  }
  
  
  // Event listener to trigger the "Add User" form display
  const addUserLink = document.querySelector('.addUser');
  addUserLink.addEventListener('click', showAddUserForm);
  
  // Convert users, admins, and products to arrays
  const  usersArray = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      age: 30,
      gender: "Male",
      role: "Engineer",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      age: 25,
      gender: "Female",
      role: "Designer",
    },
    // Add more objects as needed
    {
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      age: 40,
      gender: "Male",
      role: "Manager",
    },
    {
      name: "Emily Brown",
      email: "emily.brown@example.com",
      age: 28,
      gender: "Female",
      role: "Developer",
    },
    {
      name: "Michael Lee",
      email: "michael.lee@example.com",
      age: 35,
      gender: "Male",
      role: "Analyst",
    },
    {
      name: "Sophia Martinez",
      email: "sophia.martinez@example.com",
      age: 27,
      gender: "Female",
      role: "Sales Representative",
    },
    {
      name: "William Davis",
      email: "william.davis@example.com",
      age: 32,
      gender: "Male",
      role: "Product Manager",
    },
  ];
  
  // Now you have an array of seven user objects with the specified properties
  
  const adminsArray = Object.values(admins);
  const productsArray = Object.values(products);
  
  // Function to create user div
  function createUserDiv(user) {
	const userDiv = document.createElement('div');
	userDiv.classList.add('user-item');
	userDiv.innerHTML = `
	  <h3>${user.name}</h3>
	  <p>Email: ${user.email}</p>
	  <p>Age: ${user.age}</p>
	  <p>Gender: ${user.gender}</p>
	  <p>Role: ${user.role}</p>
	`;
	usersList.appendChild(userDiv);
  }
  
  // async Loop through the users array and create user divs
  usersArray.forEach(user => createUserDiv(user));
  const userForm = document.querySelector('#addUserForm')
userForm.addEventListener('submit',  (e)=>{
	e.preventDefault();
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const age = document.getElementById('age').value;
	const gender = document.getElementById('gender').value;
	const role = document.getElementById('role').value;
	
	const newUser = {
		name, email, age, gender, role
	}
	users[name]=newUser;
	usersArray.push(newUser);
	 document.getElementById('name').value=''
	 document.getElementById('email').value=''
	 document.getElementById('age').value=''
	 document.getElementById('gender').value='male'
	document.getElementById('role').value=''
	createUserDiv(newUser)
    // try{
    //     const response = await fetch('api/user',{
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(newUser)
    //     })
    //     if (response.ok){
    //         const data = await response.json()
    //         console.log('user added success')
    //     }else{
    //         throw new Error(data.message)
    //     }
    // }catch(error){
    //     console.log('error',error.message)
    // }

})

  