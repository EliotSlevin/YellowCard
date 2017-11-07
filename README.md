# YellowCard
Designs: https://zpl.io/adxjj17

The first goal of phase one will be to build a basic app which allows a single pharamcist to edit information, and patients to login and view them in the 'Medication List' screen.

### React Native App Functionality
Patient Login UI
Tabbed navigation between 'Medication List' and empty 'Today' tab.
View a list of their medications, with the additional details. 
Set up persistant database on app (e.g. if the app is closed, a patient's medications don't need to be re-fetched, and they stay logged in - see https://facebook.github.io/react-native/docs/asyncstorage.html)

### Pharmacist Portal Functionality
A single admin account will be able to login and edit information about all patients. This will be the easiest way to test a MVP. This admin account will be able to do the following:

Add / Edit / Delete Patient Information. Each patient has the following fields, and a list of medications.

`firstName: string, lastName: string, email: string, NHI: string, medications: array`

Add / Edit / Delete Medications, which have the following fields

`genericName: string, brandName: string, purpose: string, extraInfo: string, timings:{w:number,b:number,l:number,d:number,s:number}`


The goal of the first phase is to build the infrastructure to add upon, the second phase will be looking at a smart today view, notifications, etc. 


