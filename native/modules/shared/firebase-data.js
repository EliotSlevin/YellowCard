export const extractFirebaseData = (docData) => {
  const docId = docData.name.substr(docData.name.lastIndexOf('/') + 1)
  const data = Object.keys(docData.fields).reduce((doc, key) => {
    const innerKey = Object.keys(docData.fields[key])[0]
    let innerData = null
    if (innerKey == 'integerValue') innerData = parseFloat(docData.fields[key][innerKey])
    else innerData = docData.fields[key][innerKey]

    doc[key] = innerData

    return doc
  }, {})

  data.id = docId

  return data
}