download and npm run start in the command line.

About Project ->
Rendering based on state, click a button it randomly flips a coin
that coin's image is shown while indicating its results while
incrementing a counter that keeps track of the amount of heads
or tails that landed.

Skills learned ->
Ternary operator usage instead of if-else
SetState is asynchronous meaning it takes time, you need the
previous state in order to render the newer state and to do that
you need setState's callback. Whenever state relies on previous state
use the callback
Props are used for data doesn't change such as heads or tails or the images
used. State is used for data that will change, like the result or the
incrementers
conditional rendering {this.state.result && <Coin result=this.state.result/>} this will check if
this.state.result exists before rendering a component that relies on it preventing errors

in this section of the code this.setState((st, p) => {
let g = this.props.options[flip];

      let obj = {
        result: g,

i used result. p.options[flip] i didnt need the previous props i needed the variable g i assigned
be careful with them previous parameters. Always be aware of the time
