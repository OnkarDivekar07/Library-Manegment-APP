
const booktable = require('../model/booktable')


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
    try {

        const bookName = req.body.name;
        const book = await booktable.create({ bookName: bookName, fine: 0 })
        return res.json(book)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ success: false })
    }
};

exports.returnBook = async (req, res) => {
    try {
        const value = req.body.value;
        const id = req.body.id;
        const book = await booktable.findByPk(id);
        const startTime = new Date(book.createdAt);
        const curr = new Date();
        const hours = Math.floor((curr - startTime) / (1000 * 60 * 60));
        console.log(hours)
        if (hours < 1) {
            book.returned = true;
            await book.save()
            return res.json({ success: true, book })
        } else {
            //if reader has paid fair amount of fine or not
            const fine = hours * 10;
            console.log(fine)
            if (fine == value) {
                book.returned = true;
                book.fine = fine;
                await book.save()
                return res.json({ success: true, book })
            } else {
                return res.status(403).json({ success: false })
            }
        }

    } catch (e) {
        console.log(e)
        return res.status(500).json({ success: false })
    }
};