import './ShoppingListCard.css'
import image from '../../images/cross.png'

function ShoppingListCard({
                              shoppingList,
                              isOpen,
                              onToggle,
                              onDelete,
                          }) {

    return (
        <article
            className="slcCard"
        >

            <div
                className="slcHeader"
                onClick={onToggle}
            >

                <div>

                    <h3>
                        Boodschappenlijst #
                        {shoppingList.id.slice(0, 8)}
                    </h3>

                    <p>
                        {new Date(
                            shoppingList.createdAt)
                            .toLocaleString()}
                    </p>

                </div>

                <button
                    className="slcDeleteButton"
                    type="button"
                    onClick={(e) => {

                        e.stopPropagation()

                        onDelete(
                            shoppingList.id
                        );
                    }}
                >
                    <img
                        id="cancelButton"
                        src={image}
                        alt="Kruis button om lijstjes te verwijderen"
                    ></img>
                </button>


            </div>

            {isOpen && (

                <div
                    className="slcBody"
                >
                    <p>
                        <strong>
                        Totaal:
                        € {
                        shoppingList.totalPrice
                    }
                    </strong>
                    </p>
                    <br/>

                            <ul>

                                {shoppingList.items.map((item) => (

                                        <li
                                            key={item.id}
                                        >
                                            {item.quantity}x
                                            {" "}
                                            {item.name}
                                        </li>
                                    )
                                )}

                            </ul>

                </div>

                )}

        </article>
)
}

export default ShoppingListCard;