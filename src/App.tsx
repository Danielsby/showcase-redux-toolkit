import * as React from "react";
import './App.css';
import Quote from "./component/Quote";
import {useAppSelector, useAppDispatch} from "./redux/hooks";
import {quoteCommander} from "./redux/quoteSlicers";
import {useEffect} from "react";
import {store} from "./redux/store";
import {useState} from "react";
import {author} from "./redux/actions";

const App: React.FC = () => {
    const currentState = useAppSelector(state => state); // TODO
    const [currentText, setCurrentText] = useState("");
    const appDispatch = useAppDispatch();


    useEffect(() => {
        console.log("Current state: ", currentState);
    }, [currentState]);

    const testFunction = () => {
        appDispatch(author("OleDoleDoffen"));
        console.log("Current state: ", currentState);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Quotes</h1>
            </header>

            <main>
                <section className="create">
                    <input
                        className="quote-input"
                        onChange={(e) => setCurrentText(e.currentTarget.value)}
                        value={currentText}
                    />

                    <button onClick={() => store.dispatch(quoteCommander.actions.add(currentText))}>
                        Save quote
                    </button>
                    <button onClick={() => setCurrentText("")}>
                        Clear field
                    </button>

                    <button onClick={() => {
                        console.log("test");
                        return testFunction();
                    }}>
                        Test button
                    </button>
                </section>

                <section className="content">
                    {store.getState().quote.quotes.map((q, key) => {
                        return <Quote text={q.quote} id={q.id} key={key} />
                    })}
                </section>
            </main>
        </div>
    );
}

export default App;