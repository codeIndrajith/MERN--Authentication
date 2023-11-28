// If you add "type": "module" in package.json file. You will access to import syntax.

import express from 'express';
const PORT = 5000;
const app = express();

app.get('/', (req, res) => res.send('Server is ready'));

app.listen(PORT, () => console.log(`Server is running to PORT ${PORT}`));
