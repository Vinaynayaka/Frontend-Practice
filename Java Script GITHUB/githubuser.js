// Function to fetch GitHub user data
function getGitHubUser(username) {
    const url = `https://api.github.com/users/${username}`;
  
    fetch(url)
      .then(response => 
      {
        if (!response.ok) 
          {
          throw new Error(`User not found: ${response.status}`);
        }
        return response.json(); 
      })
      .then(userData=>{
        console.log(userData);
        displayUserData(userData);
        
      })

      .catch(error => {
        console.error("Error fetching user:", error);
      });
  }
  getGitHubUser("Vinaynayaka");

  function displayUserData(userData)
  {
    document.getElementById("name").textContent = "Name: "+userData.name;
    document.getElementById("UserName").textContent = "User Name: "+userData.login;
    document.getElementById("bio").textContent= "Bio: "+userData.bio;
    document.getElementById("repoNo").textContent= "Number of Public Repositories: "+userData.public_repos;
    document.getElementById("followers").textContent= "Followers: "+userData.followers;
    document.getElementById("created_at").textContent= "Date Created: "+userData.created_at;

  }
  
   