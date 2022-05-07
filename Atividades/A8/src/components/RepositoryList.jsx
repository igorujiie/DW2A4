import { RepositotyItem } from "./RepositoryItem"
import '../styles/repositories.scss'
import { useState, useEffect } from "react"


const repository ={
    name: "Atividade",
    description: "Descrição da Atividade",
    link:"https://github.com/igorujiie"
}


export function RepositoryList(){

    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/igorujiie/repos')
        .then(response => response.json)
        .then(data => setRepositories(data))
    },[])


    return(
        <section className="repository-list">
            <h1>Lista de repositorios</h1>
            <ul>
            <RepositotyItem  repository={repository} />    
            <RepositotyItem  repository={repository} />  
            <RepositotyItem  repository={repository} />     
               
            </ul>
        </section>
    )
}