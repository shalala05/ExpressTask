const express = require('express');
const app = express();
const port = 3001;
const products = [
    { id: 1, name: 'Məhsul 1', price: 10.99, quantity: 100 },
    { id: 2, name: 'Məhsul 2', price: 25.49, quantity: 50 },
    { id: 3, name: 'Məhsul 3', price: 40.99, quantity: 30 },
    { id: 4, name: 'Məhsul 4', price: 5.99, quantity: 200 },
    { id: 5, name: 'Məhsul 5', price: 15.99, quantity: 80 },
    { id: 6, name: 'Məhsul 6', price: 30.99, quantity: 60 },
    { id: 7, name: 'Məhsul 7', price: 12.49, quantity: 120 },
    { id: 8, name: 'Məhsul 8', price: 20.99, quantity: 90 },
    { id: 9, name: 'Məhsul 9', price: 35.49, quantity: 40 },
    { id: 10, name: 'Məhsul 10', price: 50.99, quantity: 10 },
];
app.get('/products', (req, res) => {
    const { page = 1, limit = 5 } = req.query; 
    const offset = (page - 1) * limit;
    const paginatedProducts = products.slice(offset, offset + limit);

    res.json({
        page: Number(page),
        limit: Number(limit),
        totalProducts: products.length,
        products: paginatedProducts,
    });
});
app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (!product) {
        return res.status(404).json({ message: 'Məhsul tapılmadı' });
    }

    res.json(product);
});
app.listen(port, () => {
    console.log(`Server ${port} portunda işləyir`);
    console.log("Server 2 linki: http://localhost:3001");
});
