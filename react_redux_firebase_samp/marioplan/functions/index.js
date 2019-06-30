const functions = require('firebase-functions');
const admin = require('firebase-admin'); //since we are utilizing authentication
admin.initializeApp(functions.config().firebase);// initialize the app

//reusable notification func 
const createNotification = ((notification) => {
    return admin.firestore().collection('notifications') //new or add collection
    .add(notification)// add obj
    .then(doc => console.log('notification added', doc));
});

// / for each function we create. We attach it to the exports 
//creating a function, then access the https and on request, then perform logic
// when project created function related to the firestore.
//trigger for this is the firestore
exports.projectCreated = functions.firestore
    .document('projects/{projectId}')//project collection and id
    .onCreate(doc => { //when creating fire cb

        const project = doc.data();//title, created by..
        const notification = {
            content: 'Added a new project',//what is the notification about
            user: `${project.authorFirstName} ${project.authorLastName}`, //who
            time: admin.firestore.FieldValue.serverTimestamp()//timestamp from the server and will store when the notification was created
        }

        return createNotification(notification);

    });
//user with auth trigger
exports.userJoined = functions.auth.user()
    .onCreate(user => {
        //head over into the collection and grab the record based on the id
        return admin.firestore().collection('users')
            .doc(user.uid).get().then(doc => { // get id then pass the cb with the obj
                const newUser = doc.data();//get the data from the doc
                const notification = {
                    content: 'Joined the party',
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    time: admin.firestore.FieldValue.serverTimestamp()//timestamp from the server and will store when the notification was created
                };

                return createNotification(notification);

            });
    });
