export function RepositotyItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'Repositorio Padrão'}</strong>
            <p>{props.repository?.description}</p>
            <a href="{props.repository?.html_url}">Acesso ao repositorio do Igor</a>
        </li>
    )
}