import './AllergyPage.css'
import data from '../../Data/AllergyData.json'
import AllergyInfoCard from "../../Components/AllergyInfoCard/AllergyInfoCard.jsx";

function AllergyPage () {


    return  <>

<div className="allergyOuterContainer">



<h1 className="allergyTitle">ALLERGIEËN INFORMATIE</h1>
        <div className="allergyInnerContainer">

        {data.map((allergy) => (
            <AllergyInfoCard
                key={allergy.id}
                title={allergy.name}
                description={allergy.description}
                examples={allergy.products}
            />
        ))}


    </div>

</div>

    </>

}

export default AllergyPage