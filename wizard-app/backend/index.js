/* import dependencies */
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


/* app initialization */
 const app = express()

 /*mongoDB*/
 mongoose.connect('mongodb+srv://soumya-das:12345@cluster1.wvm2kof.mongodb.net/wizard-app?retryWrites=true&w=majority')
 .then(()=>console.log('database connected'))
 .catch(()=>console.log('database error'))

 /* import schema model */
 const WizardData = require('./schema/wizardSchema')

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

/* POST */
app.post('/data', async (req,res) =>{
    try{
        const inputData = new WizardData({
            name: req.body.name,
            ipAddress: req.body.ipAddress
        })
        const userInputData = await inputData.save() /* save data  to database */
        res.status(201).send({message:'Success!'}); /* if success then render message target page */

    }
    catch(error){
        res.status(501).send(error)
    }
})

 /* host and port bind -> server creation */
 app.listen(5050, ()=>{
    console.log('server created, and listening at port 5050!')
 })