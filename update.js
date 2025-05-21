const updateUserForm = document.querySelector(".update-user");
const params = new URLSearchParams(window.location.search);
const userId = params.get("id");

const userName = params.get('name');
const email = params.get('email');
const password = params.get('password');

// document.querySelector('input[name="userName"]').value = userName;
// document.querySelector('input[name="email"]').value = email;
// document.querySelector('input[name="phone"]').value = phone;

async function getUsersData() {

    try {
        const {data} = await axios.get(`https://node-react-10.onrender.com/users/${userId}`);

        document.querySelector('input[name="userName"]').value = data.user.userName;
        document.querySelector('input[name="email"]').value = data.user.email;
        document.querySelector('input[name="phone"]').value = data.user.phone;
    } catch(err) {

        document.querySelector(".text-danger").textContent = "Update failed";
    }
}
console.log(getUsersData());
//getUsersData();


updateUserForm.onsubmit = async function(e) {
    
    e.preventDefault();

    const user = {
        userName: e.target.userName.value
    };
    

    try {
        const response = await axios.put(`https://node-react-10.onrender.com/users/${userId}`,user);
        window.location.href = "index.html";

    } catch(e){
        document.querySelector(".text-danger").textContent = "Update failed";
    }
    
}