const express = require('express');
const app = express();

app.use(express.static(`dist/XO2/`));

app.get(`/*`, function(req, res) {
  res.sendFile(`index.html`, {root: `dist/XO2/`}
  );
});


app.listen(process.env.PORT || 8080);
