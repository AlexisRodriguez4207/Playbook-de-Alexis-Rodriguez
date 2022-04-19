const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())


const Issues = {
       tittle:"Playbook",
       repostoryNameAssociate: "Playbook",
       status: "open",
       numberOfCommits: 100,
       labels:"100",
       author:"Alexis Rodrguez",
       dateCreated:"09/04/2022",
       lastUpdate:"17/04/2022",

       getTittleAndAuthor: function(){
              return `${Issues.tittle} was created by ${Issues.author}`
         },
            getGeneralInfo: function(){
              return `This repository ${Issues.repostoryNameAssociate} was created by ${Issues.author}`
            }
    }
    console.log("El Nombre y el Autor son:" + Issues.getTittleAndAuthor())
    console.log(Issues.getGeneralInfo()) 

const 