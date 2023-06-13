const File = require('../models/file')

module.exports.home = async function (req, res) {
    try {
        let file = await File.find({});
        return res.render('home', {
            title: " | Home",
            files: file,
        });
    } catch (error) {
        console.log("Error in importing files", error);
    };
};