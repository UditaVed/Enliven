
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://Ravi02rr:slrbkMeyLMxjBfs3@cluster0.pa8zqtm.mongodb.net/?retryWrites=true&w=majority", {
    dbName: "backend",
})
    .then(() => console.log("data base connected"))
    .catch((e) => console.log(e));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const replySchema = new mongoose.Schema({
    reply: String,
});

const Reply = mongoose.model('Reply', replySchema);

const questionSchema = new mongoose.Schema({
    title: String,
    replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reply' }],
});

const Question = mongoose.model('Question', questionSchema);

app.get('/', async (req, res) => {
    try {
        const questions = await Question.find({});
        res.render('home', { questions });
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/view', async (req, res) => {
    try {
        const questions = await Question.find({});
        res.render('home', { questions });
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/new', (req, res) => {
    res.render('ask_que');
});

app.post('/', async (req, res) => {
    const title = req.body.question;
    try {
        const ask = new Question({ title });
        await ask.save();
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/view/:id', async (req, res) => {
    try {
        const question = await Question.findById(req.params.id).populate('replies');
        res.render('question', { question }); // Pass the 'question' variable to the 'question.ejs' template
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/view/:id/replies', async (req, res) => {
    const replyText = req.body.reply;
    try {
        const reply = new Reply({ reply: replyText });
        await reply.save();
        const question = await Question.findById(req.params.id);
        question.replies.push(reply);
        await question.save();
        res.redirect(`/view/${req.params.id}`);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
