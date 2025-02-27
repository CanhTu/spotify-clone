var client_id = '9067c2815d6f415eb624757a146aa1ea';
var redirect_uri = 'http://localhost:5173/callback';

var app = express();

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});