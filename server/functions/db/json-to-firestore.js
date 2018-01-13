const admin = require('../node_modules/firebase-admin');
const serviceAccount = require("../../yc_pk.json");

const data = require("./seed-data.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://yellow-card-85ae7.firebaseio.com"
});

data && Object.keys(data).forEach(key => {
    const nestedContent = data[key];

    if (typeof nestedContent === "object") {
        Object.keys(nestedContent).forEach(docId => {
            admin.firestore()
                .collection(key)
                .doc(docId)
                .set(nestedContent[docId])
                .then((res) => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
        });
    }
});