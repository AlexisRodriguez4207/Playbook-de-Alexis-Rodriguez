const PullRequest={
    tittle: "Update",
    branchName: "main",
    dateCreated: "19/04/2022",
    status:"Open",
    repositoryNameAssociated: "Playbook",

    getStatus: function(){
        return `Status: ${PullRequest.status}`
    },

        getTittleAndAutor: function(){
        return `${PullRequest.tittle} was created by Alexis`
        }   
}
console.log(PullRequest.getStatus())


