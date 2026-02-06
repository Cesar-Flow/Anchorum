const admin = require('firebase-admin');

const serviceAccount = require('./anchorum-firebase.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function createOrder(orderData) {
    const docRef = db.collection('orders').doc();

    await docRef.set({
        name: orderData.name,
        email: orderData.email,
        status: 'pending',
        paymentId: null,
        createdAt: new Date()
    });
}

async function createQuestion(questionData) {
    const docRef = db.collection('questions').doc();

    await docRef.set({
        name: questionData.name,
        email: questionData.email,
        message: questionData.message,
        createdAt: new Date()
    });
}
