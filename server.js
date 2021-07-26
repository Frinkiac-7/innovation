function requireHTTPS(req, res, next) {
	// The 'x-forwarded-proto' check is for Heroku
	if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
			return res.redirect('https://' + req.get('host') + req.url);
	}
	next();
}

const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['https://innosb.herokuapp.com']; // list of allow domain

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) {
            return callback(null, true);
        }

        if (whitelist.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}

// end 
app.use(requireHTTPS);

app.use(cors(corsOptions));

app.use(express.static('./dist/innovation'));
app.get('/*', function(req, res) {
	res.sendFile('index.html', {root: 'dist/innovation/'
	});
});

app.listen(process.env.PORT || 8080);

