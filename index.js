// load library express
let express = require("express")

// inisiasi object baru dari express
let app = express()

//endpoint pertama 
app.get("/test", (request, response) => {
    let kata = 'Just enjoy where are u now'
    return response.json({
        message: kata,
        nama: "Laili",
        age: 17
    })
})

//endpoint kedua:hitung BMI
//request data: tinggi,berat
//response: nilai BMI dan status BMI

//setting agar dapat membaca data request dengan format json
app.use(express.json())
app.post("/BMI",(request, response) => {
    //tampung data tinggi dan berat
    let tinggi = request.body.tinggi
    let berat = request.body.berat

    let bmi = berat/(tinggi*tinggi)

    let status = null

    if(bmi <18.5){
        status = 'Gizi Buruk'
    }else if(bmi >= 18.5 && bmi < 25){
        status = 'Ideal'
    }else if(bmi >= 25 && bmi <30){
        status = 'Kelebihan berat badan'
    }else if(bmi >= 30){
        status = 'Obesitas'
    }
    return response.json({
        nilai: bmi,
        status: status
    })
})


app.listen(8000, () => {
    console.log('Server run on port 8000');
})