const App = () => (
    <div>
        <FirstComponent/>
        <NamedComponent name="Nick Vendetti"/>
    </div>
)

ReactDOM.render(<App/>,document.getElementById("root"))