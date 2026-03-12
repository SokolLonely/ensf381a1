document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value.toLowerCase();
    const password = document.getElementById("password").value;

    async function fetchData(){
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();

            let userFound = users.find(user =>
                    user.username.toLowerCase() === username &&
                    user.email === password
                );

            const messageBox = document.getElementById("messageBox");

            if(userFound){
                messageBox.innerText = "Login successful!";

                setTimeout(()=>{
                    window.location.href = "menu_view.html";
                },2000);
            }
                else{
                    messageBox.innerText = "Invalid username or password.";
            }
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    fetchData();
});