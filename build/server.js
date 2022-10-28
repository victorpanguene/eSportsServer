import express from 'express';
const app = express();
app.get('/users', (req, res) => {
    return res.json([
        { id: 1, name: 'John', email: 'john@example.com' },
        { id: 2, name: 'Dohn', email: 'Dohn@example.com' },
        { id: 3, name: 'Cohn', email: 'Cohn@example.com' },
        { id: 4, name: 'Bohn', email: 'Bohn@example.com' },
        { id: 5, name: 'Fohn', email: 'fohn@example.com' },
    ]);
});
app.listen(3000);
