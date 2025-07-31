const Count = require("../..");
const { getInfosFromUser } = require("../features");
const createBanner = require("./createBanner");

module.exports = async (req, res) => {
    Count.addToCounter()
    const id = req.params.id;
    const query = req.query
    
    getInfosFromUser(id).then(infos=>{
        if(query?.createImage == "true"){
            createBanner(infos, res)
        } else {
            res.json(infos)
        }
    }, err=>{
        console.log(err)
        res.json({
            apiStatusResponse: 404,
            message: `The provided user ID is not valid or was not found in my database.`
        })
    })

}