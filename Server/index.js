const express = require("express")
const path = require("path")
const app = express()

console.log(__dirname + "/THE_Bank");
app.use('/', express.static(path.join(__dirname, 'THE_Bank')))
app.use('/css', express.static(path.join(__dirname, 'THE_Bank')))
app.use('/img', express.static(path.join(__dirname, 'THE_Bank')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//schema
/*
{
  'user.fname': 'Maddy',
  'user.lname': 'San',
  email: '',
  mob: '',
  ad1: '',
  ad2: '',
  state: '',
  pcode: '',
  accno: ''
}
*/

//mongoose schema
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/THE_Bank', {useNewUrlParser: true, useUnifiedTopology: true})
const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    mob: String,
    ad1: String,
    ad2: String,
    state: String,
    pcode: String,
    accno: String
})
const User = mongoose.model('User', userSchema)

app.post("/payer_details", (req, res) => {
    console.log(req.body);
    const user = new User(req.body)
    user.save().then(() => {
        res.redirect("/")
    }).catch((err) => {
        res.send("Data not saved " + err)
    })
})


/*
 {
  fname: 'Soorya',
  lname: 'a',
  email: 'asad@mlksfndkj',
  mob: 'hausidsagd',
  account_number: 'wsjabdjhbv',
  query: 'uasuiud'
}
*/
//schema
const querySchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    mob: String,
    account_number: String,
    query: String
})

const Query = mongoose.model('Query', querySchema)

app.post("/contact_data", (req, res) => {
    console.log(req.body);
    const query = new Query(req.body)
    query.save().then(() => {
        res.redirect("/")
    }).catch((err) => {
        res.status(400).send("Your query was not submitted " + err)
    })

    // res.redirect("/")
})

//get data for both schemas
app.get("/payer_details", (req, res) => {
    User.find({}, (err, data) => {
        if(err) throw err
        res.send(data)
    })
})

//update payer_details
app.post("/payer_details/updateDetails", (req, res) => {
    console.log(req.body);
    //update user all lines
    User.findByIdAndUpdate(req.body.id,
        {
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            mob: req.body.mob,
            ad1: req.body.ad1,
            ad2: req.body.ad2,
            state: req.body.state,
            pcode: req.body.pcode,
            accno: req.body.accno
        },
        { new: true }
    ).then((result) => {
        res.redirect("/")
    }
    ).catch(err => {
        console.log(err)
        return res.status(500).json("Internal server error, error: " + err.message);
    })
})

//delete payer_details
app.post("/payer_details/deleteDetails", (req, res) => {
    console.log(req.body);
    User.findByIdAndDelete(req.body.id)
    .then((result) => {
        res.redirect("/user_data.html")
    }
    ).catch(err => {
        console.log(err)
        return res.status(500).json("Internal server error, error: " + err.message);
    });
})


app.get("/contact_data", (req, res) => {
    Query.find({}, (err, data) => {
        if(err) throw err
        res.send(data)
    })
})

//start server
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

///Users/sooryasrajan/MyCodesAndStuff/NodeJS/BankingApp/Server/THE_Bank
///Users/sooryasrajan/MyCodesAndStuff/NodeJS/BankingApp/Server/THE_Bank