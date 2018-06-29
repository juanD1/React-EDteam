import { firebaseAuth, ref } from "../../data/config"; //method interactive with firebase

const saveUser = user =>
  ref
    .child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user);

const auth = (
  email,
  password //create user and password
) =>
  firebaseAuth()
    .createUserWithEmailAndPassword(email, password)
    .then(saveUser);

const login = (email, password) =>
  firebaseAuth().signInWithEmailAndPassword(email, password);

const logout = () => firebaseAuth().signOut();

const resetPassword = email => firebaseAuth().sendPasswordResetEmail(email); //send email for reset your password

export { saveUser, auth, login, logout, resetPassword };
