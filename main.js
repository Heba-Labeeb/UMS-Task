async function getUsers() {
    try {
        const {data} = await axios.get("https://node-react-10.onrender.com/users");
   // console.log(data);

    let html = "";
    for(let i=0; i<data.users.length; i++){

        html += `
                <tr>
                    <td>${data.users[i]._id}</td>
                    <td>${data.users[i].userName}</td>
                    <td>${data.users[i].email}</td>
                    <td class="d-flex gap-10 justify-content-center">
                        <a class="btn-primary btn" href="details.html?id=${data.users[i]._id}">Details</a>
                        <button onclick="deleteUser('${data.users[i]._id}')" class="btn-danger btn">Delete</button>
                        <a href="update.html?id=${data.users[i]._id}" class="btn-update btn">Edit</a>
                    </td>
                </tr>
        `;
    }
    //console.log(html);

    document.querySelector(".users-data").innerHTML = html;
    } catch(err) {
        // document.querySelector(".text-danger").textContent = err.message;
        document.querySelector(".text-danger").textContent = "Error .. ";
    } finally {
        document.querySelector(".loader-container").classList.add('d-none');
    }
}

getUsers();

async function deleteUser(id) {

    //alert(id);
    
    
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
        if (result.isConfirmed) {
            const response = await axios.delete(`https://node-react-10.onrender.com/users/${id}`);
            location.reload();
            Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success"
            });
        }
   });

}