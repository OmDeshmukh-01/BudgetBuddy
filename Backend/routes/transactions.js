const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');
const { authMiddleware } = require('../middleware/auth');

const router = require('express').Router();

// end points created below

router.post('/add-income', authMiddleware, addIncome)
router.get('/get-incomes', authMiddleware, getIncomes)
// param is id and to get it we do :id
router.delete('/delete-income/:id', authMiddleware, deleteIncome)

// for expense
router.post('/add-expense', authMiddleware, addExpense)
router.get('/get-expenses', authMiddleware, getExpense)
router.delete('/delete-expense/:id', authMiddleware, deleteExpense)

module.exports = router