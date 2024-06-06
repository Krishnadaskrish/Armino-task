const weatherCollection = require('../model/WeatherSchema');
const imageCollection = require('../model/ImageCollection');
const timeConvert = require("moment-timezone")

async function fetchApi(req, res) {
    console.log('...............');
    const { cityName } = req.body;
    const fetchData = await fetch(`${process.env.WEATHER_API}&q=${cityName}`);
    const jsonData = await fetchData.json();
    if (jsonData.cod !== 200) {
        return res.status(Number(jsonData.cod)).json({ status: "Failure", message: jsonData.message });
    }
   
    let imageData = await imageCollection.findOne({ weatherType: (jsonData.weather[0].main.toLowerCase()) }).select("imageUrl -_id ");
    console.log(imageData,'lllllllllll');
    const data = await weatherCollection({
        name: jsonData.name,
        country: jsonData.country,
        sunTimeDetails: {
            sunrise: timeConvert.unix(jsonData.sys.sunrise).tz('Asia/Kolkata').format('HH:mm:ss'),
            sunset: timeConvert.unix(jsonData.sys.sunset).tz('Asia/Kolkata').format('HH:mm:ss')
        },
        coordinates: jsonData.coord,
        weather: [{
            main: jsonData.weather[0].main,
            description: jsonData.weather[0].description
        }],
        temperature: jsonData.main,
        wind: jsonData.wind,
        visibility: jsonData.visibility,
        ...(imageData?.imageUrl && { imageUrl: imageData.imageUrl })
    }).save();
   return res.status(200).json({ status: "Success", message: "Successfully fetched the weather data.", data });
}

module.exports = {
    fetchApi
};


async function addImage (req,res){
    let body = req.body
    await imageCollection.create(body)
    return res.status(200).json({message:"image added successfully"})
}




module.exports = {
    fetchApi,
    addImage
}