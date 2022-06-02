const { request, response } = require('express');
const cors = require('cors');
const express = require('express');
const app = express();
const port= 8080 ;

app.use(cors({
    'origin': 'http://localhost:3000'
}));
app.listen(port, () => {console.log("Going live ....") });
app.get('/fibonacci',(request, response)=>{
    let number = request.query.number;
    let fib = function(number)
    {
        let result =0 if (n<=2){ return n-1;}
        result = fib(number-1) + fib(number+2)
        return result;
    };
    response.json({'fibonacci': result});

})