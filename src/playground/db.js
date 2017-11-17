import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB9cjmFSBSNNtKSHc_NqR2Q-gpAaZTrBcY",
    authDomain: "rr-ex-d7c9a.firebaseapp.com",
    databaseURL: "https://rr-ex-d7c9a.firebaseio.com",
    projectId: "rr-ex-d7c9a",
    storageBucket: "rr-ex-d7c9a.appspot.com",
    messagingSenderId: "602711574534"
  };

  firebase.initializeApp(config);
    
  const database = firebase.database();

//  database.ref('expenses')
//  .once('value')
//  .then((snapshot) => {
//      const expenses =[];
//
//      snapshot.forEach((childSnapshot) => {
//          expenses.push({
//              id: childSnapshot.key,
//              ...childSnapshot.val()
//          });
//      });
//      console.log(expenses);
//  });

//child removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});
//child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});
//child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//  database.ref('expenses')
//  .once('value')
//  .then((snapshot) => {
//      const expenses =[];
//
//      snapshot.forEach((childSnapshot) => {
//          expenses.push({
//              id: childSnapshot.key,
//              ...childSnapshot.val()
//          });
//      });
//      console.log(expenses);
//  });
//  database.ref('expenses').push({
//      description: 'Rent',
//      note: '',
//      amount: 109500,
//      createdAt: 12345678
//  });
//
//  const firebaseNotes = {
//      notes: {
//          sagah: {
//              title: 'First note!',
//              body: 'This is my note'
//          },
//          asdgasdh: {
//              title: 'Other note!',
//              body: 'This is my note'
//          }
//      }
//  };
//
//  const notes = [{
//      id: '12',
//      title: 'First note!',
//      body: 'This is my note'
//  }, {
//      id: '122316',
//      title: 'Other note!',
//      body: 'This is my note'
//  }];
//  database.ref('notes').set(notes);
//
// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });
//  const onValueChange =  (snapshot) => {
//      console.log(snapshot.val());
//  };
//
//  database.ref().on('value',onValueChange);
//
//  setTimeout(() => {
//      database.ref('age').set(28);
//  }, 3500);
//    setTimeout(() => {
//      database.ref().off('value',onValueChange);
//  }, 5500);
//    setTimeout(() => {
//      database.ref('age').set(30);
//  },6500);

//  database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//  const val = snapshot.val();
//  console.log(val);
// })
// .catch((e) => {
//     console.log('Error fetching data', e)
// });
  
//  database.ref().set({
//         name: 'GG',
//        age: 30,
//        stressLevel: 6,
//        job: {
//            title: 'SD',
//            company: 'Google'
//        },
//        isSingle: false,
//         location: {
//         city: 'Kyiv',
//         country: 'Ukraine'
//     }
// }).then(() => {
//    console.log('data is saved');
// }).catch((e) => {
//     console.log('this failed', e);
// });
//
// database.ref().update({
//     'location/city': 'Seattle', 
//     'job/company': 'Amazon',    
//       stressLevel: 1,
// });
//  //database.ref('age').set(27);
//  database.ref('location/city').set('New York');
  //database.ref('attributes').set({
  //  height: 166,
 //   weight: 60
//  }).then(() => {
 //   console.log('data is saved again');
 // }).catch((e) => {
 //     console.log('another falure', e)
 // });
 //database.ref('isSingle')
 //.remove()
 //.then(() => {
 //    console.log('Date was removed');
 //}).catch((e) => {
 //    console.log('Did not remove data', e);
 //});


 // console.log("I am trying to change the data");