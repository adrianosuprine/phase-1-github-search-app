document.addEventListener('DOMContentLoaded', function() {


    document.getElementById("github-form").addEventListener('submit',function(e){
        e.preventDefault()
    
    // users input 
        const searchTerm = document.getElementById('search').value;
        
    // gets the data from github api 
        fetch(`https://api.github.com/users/${searchTerm}`)
            .then(response => response.json())
            .then(data =>{console.log(data)
            const userList = document.getElementById('user-list');
            userList.innerHTML = '';
    
            const listItem = document.createElement('li');
            listItem.className = 'userItem';
    
            const avatar = document.createElement('img');
            avatar.src = `${data.avatar_url}`;
    
            const username = document.createElement('span');
            username.textContent = `${data.login}`;
    
            listItem.appendChild(avatar);
            listItem.appendChild(username);
    
            userList.appendChild(listItem);


            const reposList = document.getElementById('repos-list');
            reposList.innerHTML = '';
    
            const repos= document.createElement('li');
            repos.className = 'userRepos';
            
            const repositories = document.createElement('span');
            repositories.textContent = `Repositories:${data.repos_url}`;
         
    
            repos.appendChild(repositories);
    
            reposList.appendChild(repos);
            
            } )
            // .catch(error => console.error('Error fetching data:', error));
            
    });
        
     

});



