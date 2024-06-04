const PlaceInfo = require('../models/placeInfo');

// Controller for our GET request
const getPlace = async (req, res) => {

    const placeInfo = await PlaceInfo.find();
    res.status(200).json(placeInfo);
}

// Controller for our POST request
const postPlace = async (req, res) => {

    const newPlace = await PlaceInfo.create(req.body);

    res.status(200).json(newPlace);
}



module.exports = { getPlace, postPlace };
