import { Counter } from "./Counter"
import { RepositotyItem } from "./RepositoryItem"

const  repository = {
    name:"Atividade",
    description:"Descrição da Atividade",
    link:"https://github.com/igorujiie/"
}

export function RepositoryList(){
    return(
        <>
        <RepositotyItem repository={repository} />
        <Counter />
        </>
    )
}