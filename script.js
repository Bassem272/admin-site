// SIDEBAR DROPDOWN

// note ? the fetch methods are provided for the add suer adn the delete suer 
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');
const usersList = document.getElementById('usersList')
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
      id:1,
      description: "Description for Product 1",
      price: 19.99,
      category: "Electronics",
    },
    {
      name: "Product 2",
      id:1,
      description: "Description for Product 2",
      price: 29.99,
      category: "Clothing",
    },
    {
      name: "Product 3",
      id:1,
      description: "Description for Product 3",
      price: 9.99,
      category: "Home & Kitchen",
    },
    {
      name: "Product 4",
      id:1,
      description: "Description for Product 4",
      price: 39.99,
      category: "Beauty",
    },
    {
      name: "Product 5",
      id:1,
      description: "Description for Product 5",
      price: 49.99,
      category: "Toys",
    },
    {
      name: "Product 6",
      id:1,
      description: "Description for Product 6",
      price: 14.99,
      category: "Books",
    },
    {
      name: "Product 7",
      id:1,
      description: "Description for Product 7",
      price: 24.99,
      category: "Sports & Outdoors",
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
      id:1,
      email: "john.doe@example.com",
      age: 30,
      gender: "Male",
      role: "Engineer",
    },
    {
      name: "Jane Smith",
      id:2,
      email: "jane.smith@example.com",
      age: 25,
      gender: "Female",
      role: "Designer",
    },
    // Add more objects as needed
    {
      name: "Alex Johnson",
      id:3,
      email: "alex.johnson@example.com",
      age: 40,
      gender: "Male",
      role: "Manager",
    },
    {
      name: "Emily Brown",
      id:4,
      email: "emily.brown@example.com",
      age: 28,
      gender: "Female",
      role: "Developer",
    },
    {
      name: "Michael Lee",
      id:5,
      email: "michael.lee@example.com",
      age: 35,
      gender: "Male",
      role: "Analyst",
    },
    {
      name: "Sophia Martinez",
      id:6,
      email: "sophia.martinez@example.com",
      age: 27,
      gender: "Female",
      role: "Sales Representative",
    },
    {
      name: "William Davis",
      id:7,
      email: "william.davis@example.com",
      age: 32,
      gender: "Male",
      role: "Product Manager",
    },
  ];
  
  // Now you have an array of seven user objects with the specified properties
  
 
  
  // Function to create user div
  function createUserDiv(user) {
	const userDiv = document.createElement('div');
	userDiv.classList.add('user-item');
  userDiv.setAttribute('userid',user.id)
	userDiv.innerHTML = `
	  <h3>${user.name}</h3>
    <p>id:${user.id}</p>
	  <p>Email: ${user.email}</p>
	  <p>Age: ${user.age}</p>
	  <p>Gender: ${user.gender}</p>
	  <p>Role: ${user.role}</p>
    <button id="deletebtn">delete</button>
    <button id="editbtn">Edit</button>
    

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
	// users[name]=newUser;
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



usersList.addEventListener('click', (e) => {
  const deleteBtn = e.target.closest('#deletebtn');
  console.log('Event Target:', e.target);
  console.log('Delete Button:', deleteBtn);
  if (deleteBtn) {
    const userDiv = deleteBtn.parentElement;
    console.log(userDiv);

    const id = parseInt(userDiv.getAttribute('userid'), 10); // Retrieve the user ID from the 'userid' attribute
    console.log(id);
    const confirmDelete = confirm(`Are you sure you want to delete this user?${id}`);
    deleteUser(id); // Pass the user ID directly to the deleteUser function
  }
});
function deleteUser(id) {
  const index = usersArray.findIndex(ele => ele.id === id);
 

  if (index !== -1) {
    // const confirmDelete = confirm(`Are you sure you want to delete this user?${id}`);
    // if (confirmDelete) {
    //   try {
    //     // Send the delete fetch request to the backend
    //     const response = await fetch(`api/user/${userId}`, {
    //       method: 'DELETE',
    //     });

    //     if (response.ok) {
    //       // If the server responds with a successful status code, update the UI
    //       usersArray.splice(index, 1);
    //       updateUi();
    //       console.log('User deleted successfully from the database.');
    //     } else {
    //       console.error('Failed to delete user from the database.');
    //     }
    //   } catch (error) {
    //     console.error('Error occurred during the delete request:', error.message);
    //   }
    // }

    usersArray.splice(index, 1);
    updateUi();
  }
}

function updateUi() {
  usersList.innerHTML = '';
  usersArray.forEach(user => {
    createUserDiv(user);
  });
}




// usersArray.forEach(user => createUserDiv(user));
//edit user >>>>>

usersList.addEventListener(
  'click',(e)=>{
    const editBtn = e.target.closest('#editbtn');
    console.log('Event Target:', e.target);
    console.log('Edit Button:', editBtn);
    if (editBtn) {
      const userDiv = editBtn.parentElement;
        console.log(userDiv);
        const index = userDiv.getAttribute('userid');
        console.log('index',typeof index)
        const user =usersArray.find(ele=>ele.id === parseInt(index));
        console.log("USER:",user );
    editform(user);
      }
  }
)
/**
 * Edits the user form.
 *
 * @param {object} user - The user object containing the user's information.
 * @return {undefined} This function does not return a value.
 */
function editform(user){
const editForm = document.getElementById('editForm');

console.log(editUserForm)
editForm.elements.name.value = user.name;
editForm.elements.userId.value = user.id;
editForm.elements.email.value = user.email;
    editForm.elements.age.value = user.age ;
    editForm.elements.gender.value = user.gender;
    editForm.elements.role.value = user.gender;
    divForm.style.display = 'block';

    // Optional: Scroll to the form for better user experience
    divForm.scrollIntoView({ behavior: 'smooth' });

}
const divForm = document.getElementById('editUserForm')
const editUserForm = document.getElementById('editForm');

editUserForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const id = parseInt(editUserForm.elements.userId.value,10);
  const index = usersArray.findIndex(ele=> ele.id === id);
  const editedUser = {
    name:editUserForm.elements.name.value,
    id:editUserForm.elements.userId.value,
    email:editUserForm.elements.email.value,
    age:editUserForm.elements.age.value,
    gender:editUserForm.elements.gender.value,
    role:editUserForm.elements.role.value
  }
  usersArray[index]=editedUser;
//   try {
//     const response = await fetch(`/api/users/${userData.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(userData)
//     });

//     if (!response.ok) {
//       throw new Error('Failed to update user on the server.');
//     }

//     const updatedUser = await response.json();
//     return updatedUser; // Optional: You can return the updated user data if needed
//   } catch (error) {
//     console.error('Error updating user on the server:', error);
//     throw error; // Rethrow the error to handle it at the calling function
//   }
// }
  updateUi();
  divForm.style.display = 'none'; 
})
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>admin part 
    // Three admin objects 
   const adminsArray = [
    {
      name: "John Doe",
      id:1,
      role: "Content Manager",
      email: "john.doe@example.com",
      accessLevel: "Admin",
    },
    {
      name: "Jane Smith",
      id:2,
      role: "Security Administrator",
      email: "jane.smith@example.com",
      accessLevel: "Super Admin",
    },
    {
      name: "Mike Johnson",
      id:3,
      role: "SEO Specialist",
      email: "mike.johnson@example.com",
      accessLevel: "Editor",
    },
  ];
  

  
function showAddAdminForm() {
	const addAdminForm = document.getElementById('addAdmins');
	addAdminForm.style.display = 'block';
	setTimeout(() => {
	  addAdminForm.scrollIntoView({ behavior: 'smooth' });
	}, 100); // Adjust the delay as needed
  }
  
  
  // Event listener to trigger the "Add Admin" form display
  const addAdminLink = document.querySelector('.addAdmin');
  addAdminLink.addEventListener('click', showAddAdminForm);
  
  // Convert Admins, admins, and products to arrays
 
  // Now you have an array of seven Admin objects with the specified properties
  

  
  // Function to create Admin div
  const adminsList = document.getElementById('adminsList')
  function createAdminDiv(admin) {
	const adminDiv = document.createElement('div');
	adminDiv.classList.add('admin-item');
  adminDiv.setAttribute('adminid',admin.id)
	adminDiv.innerHTML = `
	  <h3>${admin.name}</h3>
    <p>id:${admin.id}</p>
	  <p>Email: ${admin.email}</p>
	  <p>Role: ${admin.role}</p>
	  <p>access Level: ${admin.accessLevel}</p>
    <button id="deletebtn">delete</button>
    <button id="editbtn">Edit</button>
    

	`;
	adminsList.appendChild(adminDiv);
  }
  
  // async Loop through the admins array and create admin divs
  adminsArray.forEach(admin => createAdminDiv(admin));
  
  const adminsForm = document.querySelector('#addAdmins')
adminsForm.addEventListener('submit',  (e)=>{
	e.preventDefault();
	const name = document.getElementById('adminName').value;
	const email = document.getElementById('adminEmail').value;
	const id = document.getElementById('adminId').value;
	const accessLevel = document.getElementById('accessLevel').value;
	const role = document.getElementById('adminRole').value;
	
	const newAdmin = {
		name,id, email, accessLevel, role
	}
  console.log(newAdmin)
	// users[name]=newUser;
	adminsArray.push(newAdmin);
 
	 document.getElementById('adminName').value=''
	 document.getElementById('adminEmail').value=''
	 document.getElementById('accessLevel').value=''
	 document.getElementById('adminId').value=''
	document.getElementById('adminRole').value=''
	 createAdminDiv(newAdmin)
    // try{
    //     const response = await fetch('api/admin',{
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(newAdmin)
    //     })
    //     if (response.ok){
    //         const data = await response.json()
    //         console.log('admin added success')
    //     }else{
    //         throw new Error(data.message)
    //     }
    // }catch(error){
    //     console.log('error',error.message)
    // }

})



adminsList.addEventListener('click', (e) => {
  const deleteBtn = e.target.closest('#deletebtn');
  console.log('Event Target:', e.target);
  console.log('Delete Button:', deleteBtn);
  if (deleteBtn) {
    const adminDiv = deleteBtn.parentElement;
    console.log(adminDiv);

    const id = parseInt(adminDiv.getAttribute('adminid'), 10); // Retrieve the admin ID from the 'adminid' attribute
    console.log(id);
    const confirmDelete = confirm(`Are you sure you want to delete this admin?${id}`);
    deleteAdmin(id); // Pass the user ID directly to the deleteUser function
  }
});
function deleteAdmin(id) {
  const index = adminsArray.findIndex(ele => ele.id === id);
 

  if (index !== -1) {
    // const confirmDelete = confirm(`Are you sure you want to delete this user?${id}`);
    // if (confirmDelete) {
    //   try {
    //     // Send the delete fetch request to the backend
    //     const response = await fetch(`api/user/${userId}`, {
    //       method: 'DELETE',
    //     });

    //     if (response.ok) {
    //       // If the server responds with a successful status code, update the UI
    //       usersArray.splice(index, 1);
    //       updateUi();
    //       console.log('User deleted successfully from the database.');
    //     } else {
    //       console.error('Failed to delete user from the database.');
    //     }
    //   } catch (error) {
    //     console.error('Error occurred during the delete request:', error.message);
    //   }
    // }

   adminsArray.splice(index, 1);
    updateUi();
  }
}

function updateUi() {
 adminsList.innerHTML = '';
 adminsArray.forEach(admin => {
    createAdminDiv(admin);
  });
}




//adminsArray.forEach(admin => createadminDiv(admin));
//edit admin >>>>>

adminsList.addEventListener(
  'click',(e)=>{
    const editBtn = e.target.closest('#editbtn');
    console.log('Event Target:', e.target);
    console.log('Edit Button:', editBtn);
    if (editBtn) {
      const adminDiv = editBtn.parentElement;
        console.log(adminDiv);
        const index = adminDiv.getAttribute('adminid');
        console.log('index',typeof index)
        const admin =adminsArray.find(ele=>ele.id === parseInt(index));
        console.log("admin:",admin );
    editform(admin);
      }
  }
)
/**
 * Edits the admin form.
 *
 * @param {object} admin - The admin object containing the admin's information.
 * @return {undefined} This function does not return a value.
 */
function editform(admin){
const editAdminForm = document.getElementById('editAdminForm');
console.log('admin in edit form',admin.name,editAdminForm)
console.log(editAdminForm)
editAdminForm.elements.adminName.value = admin.name;
editAdminForm.elements.adminId.value = admin.id;
editAdminForm.elements.adminEmail.value = admin.email;
    editAdminForm.elements.accessLevel.value = admin.accessLevel ;
    editAdminForm.elements.adminRole.value = admin.role;
    editAdminDiv.style.display = 'block';

    // Optional: Scroll to the form for better user experience
    editAdminDiv.scrollIntoView({ behavior: 'smooth' });

}
const editAdminDiv = document.getElementById('editAdminDiv')
const editAdminForm = document.getElementById('editAdminForm');

editAdminForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const id = parseInt(editAdminForm.elements.adminId.value,10);
  const index =adminsArray.findIndex(ele=> ele.id === id);
  const editedUser = {
    name:editAdminForm.elements.adminName.value,
    id:editAdminForm.elements.adminId.value,
    email:editAdminForm.elements.adminEmail.value,
    accessLevel:editAdminForm.elements.accessLevel.value,
    
    role:editAdminForm.elements.adminRole.value
  }
 adminsArray[index]=editedUser;
//   try {
//     const response = await fetch(`/api/admins/${adminData.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(adminData)
//     });

//     if (!response.ok) {
//       throw new Error('Failed to update admin on the server.');
//     }

//     const updatedAdmin = await response.json();
//     return updatedAdmin; // Optional: You can return the updated admin data if needed
//   } catch (error) {
//     console.error('Error updating admin on the server:', error);
//     throw error; // Rethrow the error to handle it at the calling function
//   }
// }
  updateUi();
  editAdminDiv.style.display = 'none'; 
})

// >>>>>>>> section of books     <<<<<<<<<
const booksArray = [
  {
    title: "The Great Gatsby",
    id:1,
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    year: 1925,
    isbn: "9780743273565",
  },
  {
    title: "To Kill a Mockingbird",
    id:2,
    author: "Harper Lee",
    genre: "Fiction",
    year: 1960,
    isbn: "9780061120084",
  },
  {
    title: "1984",
    id:3,
    author: "George Orwell",
    genre: "Fiction",
    year: 1949,
    isbn: "9780451524935",
  },
  {
    title: "The Hobbit",
    id:4,
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    year: 1937,
    isbn: "9780547928227",
  },
  {
    title: "Pride and Prejudice",
    id:5,
    author: "Jane Austen",
    genre: "Fiction",
    year: 1813,
    isbn: "9780486284736",
  },
];
function showAddBookForm() {
  const addBookForm = document.getElementById('addBookDiv');
  addBookForm.style.display = 'block';
  setTimeout(() => {
    addBookForm.scrollIntoView({ behavior: 'smooth' });
  }, 100); // Adjust the delay as needed
}

// Event listener to trigger the "Add Book" form display
const addBookLink = document.querySelector('.addBook');
addBookLink.addEventListener('click', showAddBookForm);

// Function to create Book div
const booksList = document.getElementById('booksList');
function createBookDiv(book) {
  const bookDiv = document.createElement('div');
  bookDiv.classList.add('book-item');
  bookDiv.setAttribute('bookid', book.id);
  bookDiv.innerHTML = `
    <h3>${book.title}</h3>
    <p>ID: ${book.id}</p>
    <p>Author: ${book.author}</p>
    <p>Genre: ${book.genre}</p>
    <p>Year: ${book.year}</p>
    <p>ISBN: ${book.isbn}</p>
    <button id="deletebtn">Delete</button>
    <button id="editbtn">Edit</button>
  `;
  booksList.appendChild(bookDiv);
}

// Loop through the books array and create book divs
booksArray.forEach(book => createBookDiv(book));

const addBookForm = document.getElementById('addBookForm');
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('addTitle').value;
  const bookId = document.getElementById('addBookId').value;
  const author = document.getElementById('addAuthor').value;
  const genre = document.getElementById('addGenre').value;
  const year = document.getElementById('addYear').value;
  const isbn = document.getElementById('addIsbn').value;

  const newBook = {
    title,
    id: parseInt(bookId, 10),
    author,
    genre,
    year,
    isbn,
  };

  booksArray.push(newBook);

  // Clear form inputs
  addBookForm.reset();

  createBookDiv(newBook);
});

booksList.addEventListener('click', (e) => {
  const deleteBtn = e.target.closest('#deletebtn');
  if (deleteBtn) {
    const bookDiv = deleteBtn.parentElement;
    const id = parseInt(bookDiv.getAttribute('bookid'), 10);
    const confirmDelete = confirm(`Are you sure you want to delete this book? ID: ${id}`);
    if (confirmDelete) {
      deleteBook(id);
    }
  }
});

function deleteBook(id) {
  const index = booksArray.findIndex(book => book.id === id);
  if (index !== -1) {
    booksArray.splice(index, 1);
    updateBooksUI();
  }
}

function updateBooksUI() {
  booksList.innerHTML = '';
  booksArray.forEach(book => {
    createBookDiv(book);
  });
}

// Edit book section
const editBookDiv = document.getElementById('editBookDiv');
const editBookForm = document.getElementById('editBookForm');

function editBook(book) {
  editBookForm.elements.editTitle.value = book.title;
  editBookForm.elements.editBookId.value = book.id;
  editBookForm.elements.editAuthor.value = book.author;
  editBookForm.elements.editGenre.value = book.genre;
  editBookForm.elements.editYear.value = book.year;
  editBookForm.elements.editIsbn.value = book.isbn;
  editBookDiv.style.display = 'block';
  editBookDiv.scrollIntoView({ behavior: 'smooth' });
}

booksList.addEventListener('click', (e) => {
  const editBtn = e.target.closest('#editbtn');
  if (editBtn) {
    const bookDiv = editBtn.parentElement;
    const id = parseInt(bookDiv.getAttribute('bookid'), 10);
    const book = booksArray.find(book => book.id === id);
    editBook(book);
  }
});

editBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = parseInt(editBookForm.elements.editBookId.value, 10);
  const index = booksArray.findIndex(book => book.id === id);
  const editedBook = {
    title: editBookForm.elements.editTitle.value,
    id,
    author: editBookForm.elements.editAuthor.value,
    genre: editBookForm.elements.editGenre.value,
    year: editBookForm.elements.editYear.value,
    isbn: editBookForm.elements.editIsbn.value,
  };
  booksArray[index] = editedBook;
  updateBooksUI();
  editBookDiv.style.display = 'none';
});

// function searchBooksByYear(searchYear) {
//   const matchingBooks = booksData.filter((book) => book.year === searchYear);
//   return matchingBooks;
// }

// // Example usage:
// const searchYear = 1960;
// const foundBooks = searchBooksByYear(searchYear);
// console.log(foundBooks);
