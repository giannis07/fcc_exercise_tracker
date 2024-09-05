const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)

//userModel
const userSchema = new mongoose.Schema({
  username: String,
})
const userModel = mongoose.model("user", userSchema);


//exerciseModel
const exerciseSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  description: String,
  duration: Number,
  date: { type: Date, default: new Date() }
})
const exerciseModel = mongoose.model("exercise", exerciseSchema);

app.use(cors())
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.post('/api/users',(req,res)=>{
  const newUser = new userModel({
      username:req.body.username
  });
  newUser.save();
  res.json(newUser);
})

app.get('/api/users', async (req, res) => {
  try {
      const users = await userModel.find({});
      if (!users || users.length === 0) {
        return res.status(404).send("No users found");
      }
      res.json(users);
  }
  catch (error) {
    res.status(500).send("Server Error");
  }
});

app.post("/api/users/:_id/exercises", async (req, res) => {
  const { _id } = req.params;
  const { description, duration, date } = req.body;

  // Βρες τον χρήστη με το δεδομένο _id
  const user = await userModel.findById(_id);
  if (!user) return res.status(404).json({ error: "User not found" });

  // Δημιουργία του αντικειμένου άσκησης
  let exercise = new exerciseModel({
    user_id: _id,
    description,
    duration,
    date: date ? new Date(date) : new Date() // Χρησιμοποίησε την σημερινή ημερομηνία αν δεν δοθεί
  });

  await exercise.save();

  res.json({
    _id: user._id,
    username: user.username,
    description: exercise.description,
    duration: exercise.duration,
    date: exercise.date.toDateString() // Κάνε format την ημερομηνία
  });
});

app.get('/api/users/:_id/logs', async (req, res) => {
  const { from, to, limit } = req.query;
  const { _id } = req.params;

  const user = await userModel.findById(_id);
  if (!user) return res.status(404).json({ error: "User not found" });

  // Φτιάξε το φίλτρο για την ημερομηνία
  let filter = { user_id: _id };

  if (from || to) {
    filter.date = {};
    if (from) filter.date.$gte = new Date(from);
    if (to) filter.date.$lte = new Date(to);
  }

  // Εκτέλεσε την αναζήτηση με το limit
  let exercises = await exerciseModel.find(filter).limit(parseInt(limit) || 0);

  // Φτιάξε το log array
  let log = exercises.map(ex => ({
    description: ex.description,
    duration: ex.duration,
    date: ex.date.toDateString()
  }));

  res.json({
    username: user.username,
    count: exercises.length,
    _id: user._id,
    log
  });
});




const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
