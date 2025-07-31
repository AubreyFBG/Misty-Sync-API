const Count = require("../..")

module.exports = async (req, res) => {
    res.json({
        consultsLast24h: Count.counter
    })
}