import './MainPageContainer.css'


function MainPageContainer({title, text, children}) {

    return <>

        <div className="mpcWrapper">
            <div className="mpcTextWrapper"
            >
                <h3>{title}</h3>
                <p>{text}</p>
            </div>

            <div className="mpcButtonWrapper"
            >{children}
            </div>

        </div>
    </>

}

export function SmallMainPageContainer ({title, text, children}) {

    return <>

        <div className="smallMpcWrapper">
            <div className="smallMpcTextWrapper"
            >
                <h3>{title}</h3>
                <p>{text}</p>
            </div>

            <div className="smallMpcButtonWrapper"
            >{children}
            </div>

        </div>
    </>

}

export default MainPageContainer