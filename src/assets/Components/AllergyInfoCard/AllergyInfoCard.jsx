import './AllergyInfoCard.css'

function AllergyInfoCard({
                             title,
                             description,
                             examples
                         }) {
    return (
       <div className="AllergyInfoGrid">
        <article className="AllergyInfoCard">

            <h2>{title}</h2>

            <p>{description}</p>

<p> Product voorbeelden in deze allergie</p>
            <ul>
                {examples.map((example) => (
                    <li key={example}>
                       <em>{example}</em>
                    </li>
                ))}
            </ul>

        </article>
       </div>
    );
}

export default AllergyInfoCard;
