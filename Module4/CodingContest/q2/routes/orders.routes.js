const router = require('express').Router();


// Cancel Order (Soft Delete)
router.delete('/:orderId', (req, res) => {
const db = readDB();
const orderId = Number(req.params.orderId);
const today = new Date().toISOString().split('T')[0];


const order = db.orders.find(o => o.id === orderId);
if (!order) return res.status(404).json({ message: 'Order not found' });


if (order.status === 'cancelled')
return res.status(400).json({ message: 'Order already cancelled' });


if (order.createdAt !== today)
return res.status(400).json({ message: 'Cancellation period expired' });


const product = db.products.find(p => p.id === order.productId);
product.stock += order.quantity;


order.status = 'cancelled';
writeDB(db);


res.status(200).json({ message: 'Order cancelled', order });
});


// Change Order Status
router.patch('/change-status/:orderId', (req, res) => {
const db = readDB();
const orderId = Number(req.params.orderId);
const { status } = req.body;


const flow = ['placed', 'shipped', 'delivered'];


const order = db.orders.find(o => o.id === orderId);
if (!order) return res.status(404).json({ message: 'Order not found' });


if (order.status === 'cancelled' || order.status === 'delivered')
return res.status(400).json({ message: 'Status change not allowed' });


const currentIndex = flow.indexOf(order.status);
const nextIndex = flow.indexOf(status);


if (nextIndex !== currentIndex + 1)
return res.status(400).json({ message: 'Invalid status flow' });


order.status = status;
writeDB(db);
res.status(200).json({ message: 'Status updated', order });
});
module.exports = router;