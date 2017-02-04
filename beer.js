// URL : /beer
var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

// Mongo Lab
// var db = mongojs('mongodb://josh:josh@ds129459.mlab.com:29459/beermad');

// Local MongoDB
var reviewDB = mongojs('beermad', ['review']); // mongojs('db name', ['collection name']);

router.get('/reviews', function(req, res, next) {
    // res.send("review");
    reviewDB.review.find(function(err, docs) {
        res.json(docs);
    });

    // db.review.find(function (err, reviews) {
    //     if (err) {
    //         res.send(err);
    //     }
    //     res.json(reviews);
    //     console.log("reviews : ", reviews);
    // });
});

router.get('/review/:id', function(req, res, next) {
    db.review.findOne({_id: mongojs.ObjectId(req.params.id)},function (err, docs) {
        if (err) {
            res.send(err);
        }
        res.json(docs);
    });
});

router.post('/review', function (req, res, next) {
    var review = req.body;
    if (!review.beer_name) {
        res.status(400);
        res.json({
            "error": "Bad data"
        });
    } else {
        db.review.save(review, function (err, docs) {
            if(err) res.send(err);
            res.json(docs);
        });
    }
});

router.delete('/review/:id', function(req, res, next) {
    db.review.remove({_id: mongojs.ObjectId(req.params.id)}, function (err, docs) {
        if (err) {
            res.send(err);
        }
        res.json(docs);
    });
});

// Update the reivew
router.put('/review/:id', function(req, res, next) {
    var review = req.body;
    var updReview = {};

    db.review.update({_id: mongojs.ObjectId(req.params.id)}, updReview, {}, function (err, docs) {
        if (err) {
            res.send(err);
        }
        res.json(docs);
    });
});

module.exports = router;


// *Server API spec*
// URL : /review/ (search all review lists)
// URL : /review/id (search selected review)
// URL : /review/ (create a review)
// URL : /review/id (update selected review)
// URL : /review/id (delete selected review)

// *Database Table spec*
// - Users (id, password, account name)
// - Review (id, Beer name, Beer score, Beer review, Restaurant Location, Photo, User Id)
// - Beer (Beer type, Beer name, Beer score, Beer location, Beer Production Area, ...)
