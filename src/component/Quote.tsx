import * as React from 'react';
import {store} from "../redux/store";
import {quoteCommander} from "../redux/quoteSlicers";

interface IQuote {
    text: string,
    id: number,
}

const Quote: React.FC<IQuote> = (props: IQuote) => {
    return (
        <div className="quote">
            <article style={store.getState().quote.quotes[props.id].favorite ? {backgroundColor: "#cececece"} : {}}>
                {props.text}
            </article>

            <button onClick={() => store.dispatch(quoteCommander.actions.favorite([props.id, true]))}>
                Favorite
            </button>
            <button onClick={() => store.dispatch(quoteCommander.actions.nonFavorite([props.id, false]))}>
                Not favorite
            </button>
            <button onClick={() => store.dispatch(quoteCommander.actions.remove(props.id))}>
                Delete
            </button>
        </div>
    )
}

export default Quote;