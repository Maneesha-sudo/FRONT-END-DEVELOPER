const router = require('express').Router();
const { readDB } = require('../utils/db');


// All Orders
router.get('/allorders', (req, res) => {
const { orders } = readDB();
const list = [];
orders.forEach(o => list.push(o));
res.json({ count: list.length, orders: list });
});


// Cancelled Orders
router.get('/cancelled-orders', (req, res) => {
const { orders } = readDB();
const cancelled = orders.filter(o => o.status === 'cancelled');
res.json({ count: cancelled.length, orders: cancelled });
});


// Shipped Orders
router.get('/shipped', (req, res) => {
const { orders } = readDB();
const shipped = orders.filter(o => o.status === 'shipped');
res.json({ count: shipped.length, orders: shipped });
});


// Revenue by Product
router.get('/total-revenue/:productId', (req, res) => {
const { orders, products } = readDB();
const productId = Number(req.params.productId);
const product = products.find(p => p.id === productId);


if (!product) return res.status(404).json({ message: 'Product not found' });


const totalRevenue = orders
.filter(o => o.productId === productId && o.status !== 'cancelled')
.reduce((sum, o) => sum + o.quantity * product.price, 0);


res.json({ productId, totalRevenue });
});


// Overall Revenue
router.get('/alltotalrevenue', (req, res) => {
const { orders, products } = readDB();


const totalRevenue = orders
.filter(o => o.status !== 'cancelled')
.reduce((sum, o) => {
const product = products.find(p => p.id === o.productId);
return sum + o.quantity * product.price;
}, 0);


res.json({ totalRevenue });
});


module.exports = router;