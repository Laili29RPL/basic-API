let express = require("express")
let app = express()
// end point 1
app.get("/kubus",(request, response)=> {
    let sisi = `6`

    let volume = sisi * sisi * sisi
    let luaspermukaan = 6 * (sisi * sisi)
    return response.json({
        volume : volume,
        luas : luaspermukaan
    })
    
})

// endpoint 2
app.get("/balok", (request, response) => {
    let panjang = 8
    let lebar = 2
    let tinggi = 6

    let volume = panjang * lebar * tinggi
    let luaspermukaan = (2*panjang*lebar)+(2*panjang*tinggi)+(2*lebar*tinggi)
    return response.json({
        volumebalok : volume,
        lpbalok: luaspermukaan
    })
})

// endpoint 3
app.get("/tabung", (request, response) => {
    let tinggi = 28
    let r = 7
    let phi = 22/7

    let volume = phi * r * r  * tinggi
    let luaspermukaan = 2* phi * r * (r+tinggi)
    return response.json({
        volumetabung : volume,
        lptabung: luaspermukaan
    })
})

// endpoint 4
app.get("/kerucut", (request, response) => {
    let tinggi = 24
    let r = 7
    let phi = 22/7
    let sisi = 25

    let volume = 1/3 * phi * r * r  * tinggi
    let luaspermukaan = phi * r * (r + sisi)
    return response.json({
        volumekerucut : volume,
        lpkerucut: luaspermukaan
    })
})

app.listen(8000, ()=> {
    console.log(`Server run on port 8000`);
})