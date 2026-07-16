import './AllergyInfoCard.css'

function AllergyInfoCard({
                             title,
                             description,
                             examples
                         }) {
    return (
        <div className="AllergyInfoGrid">

            <fieldset className="aicFieldset"
            >

                <legend><strong>{title}</strong></legend>

                <p>{description}</p>

                <p> <strong>Product voorbeelden in deze allergie</strong></p>
                <ul>
                    {examples.map((example) => (
                        <li key={example}>
                            <em>{example}</em>
                        </li>
                    ))}
                </ul>
            </fieldset>

        </div>
    );
}

export default AllergyInfoCard;
