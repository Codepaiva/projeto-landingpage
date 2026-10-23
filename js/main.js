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
        let tag_p_topics = document.createElement("p")

        
        tag_a.href = data[i]['clone_url']
        
        let linkText = document.createTextNode(data[i]['name']);
        let descriptionText = document.createTextNode(data[i]['description']);
        let topicsText = document.createTextNode(data[i]['topics']);
        
       

        
        tag_a.appendChild(linkText);
        tag_p.appendChild(descriptionText)
        tag_p_topics.appendChild(topicsText)
            
        div.appendChild(tag_a)
        div.appendChild(tag_p)
        div.appendChild(tag_p_topics)
            
        listElement.appendChild(div)
    }
}

getProjects()