const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// app.get("/", function(req, res) {
//   res.sendFile(`index.html`);
//   }
// );

// app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/public`));



app.listen(PORT, function() {
    console.log(`Server is running on PORT:' ${PORT}`);
});
