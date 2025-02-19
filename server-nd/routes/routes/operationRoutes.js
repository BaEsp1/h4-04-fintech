const express = require('express');
const router = express.Router();
const operationController = require('../controllers/operationController');
const { authenticate } = require('../middleware/authenticate'); 

/**
 * @swagger
 * /operations:
 *   get:
 *     summary: Obtener todas las operaciones del usuario autenticado
 *     description: Endpoint para obtener todas las operaciones de compra o venta realizadas por el usuario.
 *     responses:
 *       200:
 *         description: Lista de operaciones
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/operations', authenticate, operationController.getAllOperations);

/**
 * @swagger
 * /operations:
 *   post:
 *     summary: Crear una nueva operación
 *     description: Endpoint para crear una operación de compra o venta de instrumentos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               instruments:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     idInstrument:
 *                       type: integer
 *                     quantity:
 *                       type: integer
 *                     pricePerUnit:
 *                       type: float
 *               operationType:
 *                 type: string
 *                 enum: [buy, sell]
 *               currency:
 *                 type: string
 *     responses:
 *       200:
 *         description: Operación creada exitosamente
 *       400:
 *         description: Error en la operación
 *       500:
 *         description: Error interno del servidor
 */
router.post('/operations', authenticate, operationController.createOperation);

/**
 * @swagger
 * /operations/{id}:
 *   get:
 *     summary: Obtener una operación específica por su ID
 *     description: Endpoint para obtener los detalles de una operación específica.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la operación a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Operación encontrada
 *       404:
 *         description: Operación no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.get('/operations/:id', authenticate, operationController.getOperationById);

module.exports = router;
