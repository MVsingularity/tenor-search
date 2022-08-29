const express = require('express');
const app = express();
const Tenor = require("tenorjs").client({

"Key": "AIzaSyAPsQvBLuUPWb-njxpEX4wqlqwIcgcZ3DI",
"Filter": "high",
"Locale": "en_US",

});

const exphbs = require('express-handlebars');

app.use(express.static('public'));

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/greetings/name', (req, res) => {
  const name = req.params.name;
  res.render('greetings', { name });
})

app.get('/', (req, res) => {
  term = ""
  if (req.query.term) {
    term = req.query.term
  }
  Tenor.Search.Query(term, "10")
    .then(response => {
      const gifs = response;
      res.render('home', {gifs})
    }).catch(console.error);
})

app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});
