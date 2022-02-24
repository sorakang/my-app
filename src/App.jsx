import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="title">Twordle</div>
            </header>
            <div id="game">
                <div id="board-container">
                    <div id="board">
                        {/*add js elements and dataState=empty etc*/}
                        <game-row>
                            <div className="gameRow">
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                            </div>
                        </game-row>
                        <game-row>
                            <div className="gameRow">
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                            </div>
                        </game-row>
                        <game-row>
                            <div className="gameRow">
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                            </div>
                        </game-row>
                        <game-row>
                            <div className="gameRow">
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                            </div>
                        </game-row>
                        <game-row>
                            <div className="gameRow">
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                            </div>
                        </game-row>
                        <game-row>
                            <div className="gameRow">
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                                <game-tile>
                                    <div id="tile"></div>
                                </game-tile>
                            </div>
                        </game-row>
                    </div>
                </div>
                <game-keyboard>
                    <div id="keyboard">
                        {/*dataKey is not compatible with react, replace with js*/}
                        <div className="keyRow">
                            <button dataKey={"q"}>q</button>
                            <button dataKey={"w"}>w</button>
                            <button dataKey={"e"}>e</button>
                            <button dataKey={"r"}>r</button>
                            <button dataKey={"t"}>t</button>
                            <button dataKey={"y"}>y</button>
                            <button dataKey={"u"}>u</button>
                            <button dataKey={"i"}>i</button>
                            <button dataKey={"o"}>o</button>
                            <button dataKey={"p"}>p</button>
                        </div>
                        <div className="keyRow">
                            <div className="spacerHalf"></div>
                            <button dataKey={"a"}>a</button>
                            <button dataKey={"s"}>s</button>
                            <button dataKey={"d"}>d</button>
                            <button dataKey={"f"}>f</button>
                            <button dataKey={"g"}>g</button>
                            <button dataKey={"h"}>h</button>
                            <button dataKey={"j"}>j</button>
                            <button dataKey={"k"}>k</button>
                            <button dataKey={"l"}>l</button>
                            <div className="spacerHalf"></div>
                        </div>
                        <div className="keyRow">
                            <button data-key={"↵"} className="spacerPlus">enter</button>
                            <button dataKey={"z"}>z</button>
                            <button dataKey={"x"}>x</button>
                            <button dataKey={"c"}>c</button>
                            <button dataKey={"v"}>v</button>
                            <button dataKey={"b"}>b</button>
                            <button dataKey={"n"}>n</button>
                            <button dataKey={"m"}>m</button>
                            <button data-key={"←"} className="spacerPlus">back</button>
                        </div>
                    </div>
                </game-keyboard>
            </div>
        </div>
    );
}

// https://www.nytimes.com/games/wordle/index.html

export default App;
