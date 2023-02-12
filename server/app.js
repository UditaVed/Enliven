
const express = require('express')
const bodyParser = require('body-parser')

// Using Node.js `require()`
const mongoose = require('mongoose');
const { post } = require('request');

mongoose.connect('mongodb://127.0.0.1:27017/Project_exh');

const app = express()
const port = 3000
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


const newQUe = "how to get rid of this case...."

const QueSchema = new mongoose.Schema({
    title: String,
    Replies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            Ref: 'Reply'
        }
    ]

})


const Que = mongoose.model("Question", QueSchema)


// const newQue = new Que({
//     title: newQUe

// })
// newQue.save()



app.get('/', (req, res) => {
    Que.find({}, (err, questions) => {
        if (err) {
            console.log(err)

        } else {

            res.render("home", {
                questions: questions
            });

        }

    })

})

// show all questions
app.get('/view', (req, res) => {
    Que.find({}, (err, questions) => {
        if (err) {
            console.log(err)

        } else {

            res.render("home", {
                questions: questions,
            });

        }

    })

})


// post your question here
app.get("/new", (req, res) => {
    res.render("ask_que")
});


// mongo post new question
app.post("/", (req, res) => {
    const title = req.body.question

    const ask = new Que({
        title: title
    })
    ask.save((err, data) => {
        if (err) {
            console.log(err)

        } else {
            res.redirect("/")
        }
    })

});




// new section for every questions


app.get("/view/:id", (req, res) => {
    Que.findById(req.params.id).populate('Replies').exec((err, Question) => {
        if (err) {
            console.log(err)
        } else {

            console.log(Question)

            res.render("question", { Question: Question })


        }
    })
})

// comment add to post

const replySchema = new mongoose.Schema({
    reply: String
})

const Reply = mongoose.model("Reply", replySchema);


app.post("/view/:id/replies", (req, res) => {



    const reply = new Reply({
        reply: req.body.reply
    });
    reply.save((err, result) => {
        if (err) {
            console.log(err);

        }
        else {
            console.log(result)
            Que.findById(req.params.id, (err, Que) => {
                if (err) {
                    console.lof(err);
                } else {


                    Que.Replies.push(result);
                    Que.save();
                    console.log(Que.Replies)
                    // console.log(result)
                    res.redirect("/")


                }
            })


        }
    })

})













app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})