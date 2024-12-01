const App = () => (
    <div>
        <TweetComponent UserName="NVendetti" DateTweet="12/12/2024" NameOfUser="Nick Vendetti" TweetMessage="I hope this works!"/>
        <TweetComponent UserName="SSCHMIDT" DateTweet="10/25/2022" NameOfUser="Summer Schmidt" TweetMessage="You are doing great!"/>
        <TweetComponent UserName="MilesPerHR" DateTweet="05/04/1989" NameOfUser="Miles Angelo" TweetMessage="Are you learning anything?"/>
    </div>
)

ReactDOM.render(<App/>,document.getElementById("root"))