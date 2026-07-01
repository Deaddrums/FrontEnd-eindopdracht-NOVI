import './AllergyInfoCard.css'

function AllergyInfoCard({
                             title,
                             description,
                             examples
                         }) {
    return (
        <article className="AllergyInfoCard">

            <h2>{title}</h2>

            <p>{description}</p>

            <ul>
                {examples.map((example) => (
                    <li key={example}>
                        {example}
                    </li>
                ))}
            </ul>

        </article>
    );
}

export default AllergyInfoCard;
