function getProjects(){
    const urlGitHub = 'https://api.github.com/users/Codepaiva/repos'
    var loadingElement = document.getElementById('loading')

    fetch(urlGitHub,{
        method: 'GET',
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            showProjects(response)
            loadingElement.style.display = 'none'
        })
        .catch((e) => {
            console.log(`Error -> ${e}`)
        })
}

function showProjects(data){
    var listElement = document.getElementById('my-projects-list')
    for(let i = 0; i < data.length; i++){
        
        let div = document.createElement("div")
        let tag_a = document.createElement("a")
        let tag_p = document.createElement("p")

        
        tag_a.href = data[i]['clone_url']
        
        let linkText = document.createTextNode(data[i]['name']);
        let descriptionText = document.createTextNode(data[i]['description']);
        
        
        tag_a.appendChild(linkText);
        tag_p.appendChild(descriptionText)
            
        div.appendChild(tag_a)
        div.appendChild(tag_p)

            
        listElement.appendChild(div)
    }
}

getProjects()