const App = () => (
    <div>
        <Person name="Mark Mark" age={15} hobbies={["run,","walk,","hike"]}/>
        <Person name="Meowscles" age={34} hobbies={["swim,","sing,","BMX"]}/>
        <Person name="HighWire" age={19} hobbies={["paint, ","dance, ","skate"]}/>
    </div>
)

ReactDOM.render(<App/>,document.getElementById("root"))