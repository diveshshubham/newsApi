
const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const unirest = require('unirest');
let final_res = null
require("dotenv").config();

//route for getting weather news (Authentication is not reuired here)
router.get("/weather", async (req, res) => {
    try {
        //options for query parameter
        let city_country = req.query.q;
        const latitue = req.query.lat;
        const longitude = req.query.lon;
        const city_id = req.query.id;
        let units = req.query.units;

        let link = "" + process.env.DEFAULT_WEATHER_LINK + "?"

        if (city_country) {
            link += "q=" + city_country
        }else{
            city_country = "Kolkata,IN"
            link += "q=" + city_country
        }

        if (latitue && longitude) {
            link += "lat=" + latitue + "&lon=" + longitude
        }

        if (city_id) {
            link += "id=" + city_id
        }

        if (units) {
            link += "&units=" + units
        } else {
            //setting metric as default unit
            units = "metric"
            link += "&units=metric"
        }

        //fetchiing data from weathermap API
        const req_uni = await unirest('GET',
            link + "&appid=" + process.env.WEATHER_API_KEY)

        let incoming_data = JSON.parse(req_uni.raw_body)
        incoming_data = incoming_data.list
        let data = [];

        //setting data as per required format
        for (let i = 0; i < incoming_data.length; i = i + 8) {
            let converted_date = new Date((incoming_data[i].dt) * 1000).toString()
            let obj = {}
            obj.date = converted_date
            obj.main = incoming_data[i].weather[0].main
            obj.temp = incoming_data[i].main.temp
            data.push(obj)
        }

        final_res = {
            count: data.length,
            units: units,
            location: city_country,
            data: data
        }

        res.send({ message: "success", final_res })

    }
    catch (err) {
        res.send({ message: "oops! something went worng" })
    }
})

//route for getting news - Authentication required
router.get("/news", auth, async (req, res) => {

    try {
        //options for filters
        let country = req.query.country;
        const category = req.query.category;
        const pageSize = req.query.pageSize;
        const page = req.query.page;
        const search_by_query = req.query.search
        const language = req.query.language

        if(!country){
            country = "in" //setting India as default country can be chnaged after accessing device's location (optional)
        }
        let link = "" + process.env.DEFAULT_NEWS_LINK + "?country=" + country + "&"

        if (category) {
            link += "category=" + category + "&"
        }
        if (pageSize) {
            link += "pageSize=" + pageSize + "&"
        }
        if (page) {
            link += "page=" + page + "&"
        }
        if (search_by_query) {
            link += "q=" + search_by_query + "&"
        }
        if (language) {
            link += "language=" + language + "&"
        }

        const req_uni = await unirest('GET',
            link + "apiKey=" + process.env.API_KEY_NEWS)

        let incoming_data = JSON.parse(req_uni.raw_body)
        incoming_data = incoming_data.articles

        let data = []

        for(let i=0 ; i<incoming_data.length; i++){
            let obj = {}
            obj.headline = incoming_data[i].title
            obj.link = incoming_data[i].url
            obj.content = incoming_data[i].content
            data.push(obj)
        }

        final_res = {
            count: data.length,
            data : data
        }
        
        res.send({ message: "success", final_res })
    }
    catch (err) {
        res.send({ message: "oops! something went worng" });
    }
});

// to get the sources (optional)
router.get("/news/sources", auth, async (req, res) => {

    let link = "" + process.env.DEFAULT_NEWS_LINK + "/sources?"

    try {
        var req = await unirest('GET', link + "apiKey=" + process.env.API_KEY_NEWS)
        final_res = JSON.parse(req.raw_body)
        res.send({ message: "This is an option to select source", final_res })
    }
    catch (err) {
        res.send({ message: "oops! something went worng" })
    }
})
module.exports = router;