const books = require('../model/booktable');
const booktable = require('../model/booktable')
const returntable = require('../model/returntable')


exports.getbooks = async (req, res) => {
    console.log('book data send');
    try {
        const result = await booktable.findAll();
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
    }
};

exports.postbooks = async (req, res, next) => {
    console.log('book added');
    const description = req.body.description;
    

    try {
        const result = await booktable.create({
            description: description
        });
        res.send(result);
    } catch (err) {
        console.log(err);
    }
};

// exports.postcomment = async (req, res, next) => {
//     console.log('comment added');
//     const comments = req.body.comment;
//     const id = req.body.postid;
//     console.log(id);

//     try {
//         const result = await comment.create({
//             text: comments,
//             postId: id,
//         });
//         res.send(result);
//     } catch (err) {
//         console.log(err);
//     }
// };

// exports.getcomment = async (req, res) => {
//     console.log('comment data send');

//     try {
//         const result = await comment.findAll();
//         res.status(200).json(result);
//     } catch (err) {
//         console.log(err);
//     }
// };
