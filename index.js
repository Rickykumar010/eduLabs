require('dotenv').config();
const express = require('express');
const { mongoConnect } = require('./configs/db');
const { userRouter } = require('./router/userRouter');
const { taskRouter } = require('./router/taskRouter');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use( userRouter);
app.use( taskRouter);

app.get('/home',(req,res)=>{
    res.json({msg:"hiiiii home"})
})
app.listen(port, async () => {
    try {
        await mongoConnect(process.env.MONGODB_URL)
        console.log(`Listening on port ${port}`);
    } catch (err) {
        console.error(err);
    }
})


