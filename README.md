# YellowCard
Designs for this first phase: https://zpl.io/adxjj17

The first goal of phase one will be to build a basic app which allows a single pharamcist to edit information, and patients to login and view them in the 'Medication List' screen. The goal of the first phase is to setup the infrastructure to add upon in the next phases. 


### React Native App Functionality
Patient Login UI
Tabbed navigation between 'Medication List' and empty 'Today' tab.
View a list of their medications, with the additional details. 
Set up persistant database on app (e.g. if the app is closed, a patient's medications don't need to be re-fetched, and they stay logged in - see https://facebook.github.io/react-native/docs/asyncstorage.html)

### Pharmacist Portal Functionality
A single admin account will be able to login and edit information about all patients. This will be the easiest way to test a MVP. This admin account will be able to do the following:

Add / Edit / Delete Patients, and their details. Each patient has the following fields, and a list of medications.

`firstName: string, lastName: string, email: string, NHI: string, medications: array`

Add / Edit / Delete Medications, which have the following fields

`genericName: string, brandName: string, purpose: string, extraInfo: string, timings:{w:number,b:number,l:number,d:number,s:number}`

I have some designsfor this interface - but I haven't put them in zeplin as I'd rather we focus on functionality first, then I can improve the UX. I'd also be interested in any suggestions for UI librarys etc to make this part easier to build. 

### Backend Connection.
These two UI's will require a database, a way for clients (patients) to connect to that database, and an authentication system. I'm personally a fan of firebase, but interested in any options. 

### Phase two!
I think this basic functionality is a great starting point, but for context here's what I'm thinking the next steps will be. 
- Building the today view, which figures out what meds you should be taking when
- Adding notifications for med reminders
- Patients adding their own medication
- Multiple admin accounts
- Easy wins, like a medication saftey tab with basic information
