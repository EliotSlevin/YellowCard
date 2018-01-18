const admin = require('../node_modules/firebase-admin')
const serviceAccount = require("../../yc_pk.json")

const data = require("./seed-data.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

const setData = (key, content, docRef, batch, collections) => {
  if (typeof content === "object") {
    console.log('key', key)
    if (collections.includes(key)) {
      Object.keys(content).forEach((innerDocId) => {
        const innerDocContent = content[innerDocId]
        const innerDocRef = docRef.collection(key).doc(innerDocId)
        console.log('innerdocid', innerDocId, 'innerdoccontent', innerDocContent)
        setData(innerDocId, innerDocContent, innerDocRef, batch, collections)
        // Object.keys(innerDocContent).forEach((innerContentInnerKey) => {
        //   console.log('innerdocid', innerDocId, 'innerdoccontent', innerDocContent)
        //   setData(innerContentInnerKey, innerDocContent, innerDocRef, batch, collections)
        // })
      })
    } else {
      Object.keys(content).forEach((innerKey) => {
        const innerContent = content[innerKey]
        console.log('innerkey', innerKey, 'innercontent', innerContent)
        setData(innerKey, innerContent, docRef, batch, collections)
      })
    }
  } else {
    batch.set(docRef, { [key]: content }, { merge: true })
  }
}

if (data) {
  let db = admin.firestore()
  const batch = db.batch()
  const collections = data.collections || []
  Object.keys(data).forEach(key => {
    if (key != 'collections') {
      const content = data[key]
      setData(key, content, db, batch, collections)
    }
  })

  batch.commit().then(() => {
    console.log('seed applied successfully')
  })
}  
