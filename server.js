const express = require('express');
const con = require('./model/db');
const userRouter = require('./routes/userRoutes');
const doctorRouter = require('./routes/doctorRoutes');
const patientRouter = require('./routes/patientRoutes');
const appointmentRouter = require('./routes/appointmentRoutes');

const app = express();

app.use(express.json());
// routes 
app.use('/users', userRouter);
app.use('/patients', patientRouter);
app.use('/doctors', doctorRouter);
app.use('/appointments', appointmentRouter);
// connect to database and start server
con.connect((err) => {
    if (err) throw err;
    console.log("connected to database");
    app.listen(3001, (err) => {

        console.log('server is running on port 3001');
    })
})
