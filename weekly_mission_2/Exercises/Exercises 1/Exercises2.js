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
 console.log(Issues.getTittleAndAuthor())
 console.log(Issues.getGeneralInfo()) 

