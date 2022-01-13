import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { getDoc, getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import * as authApi from "../../api/authApi";

import * as types from "./ActionTypes";

export function registerUserSuccess(user) {
    return { type: types.CREATE_USER_SUCCESS, user: user };
}

export function userSignedIn(user) {
    return { type: types.USER_SIGNED_IN, user: user };
}

export function userSignedOut() {
    return { type: types.USER_SIGNED_OUT, user: null };
}

export function login(user) {
    return function (dispatch) {
        console.log("from login redux");
        const db = getFirestore();
        const auth = getAuth();

        signInWithEmailAndPassword(auth, user.email, user.password)
            .then(async (userCredential) => {
                const signedInUser = userCredential.user.auth.currentUser;
                // ...
                console.log(signedInUser);

                alert(
                    "Admin user is logged in! \n" +
                        "Email: " +
                        signedInUser.email
                );

                const docRef = doc(db, "users", signedInUser.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }

                setTimeout(
                    () =>
                        dispatch(
                            userSignedIn({ ...signedInUser, ...docSnap.data() })
                        ),
                    2000
                );
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..

                console.error(errorCode + ": " + errorMessage);
            });
    };
}

export function checkAuthStatus() {
    return function (dispatch) {
        console.log("from check auth status");

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                // const uid = user.uid;
                // ...
                console.log("Auth status: ");
                console.log(user.auth.currentUser);
                setTimeout(() => dispatch(userSignedIn(user)), 2000);
            } else {
                console.log("Not logged in");
                setTimeout(() => dispatch(userSignedOut()), 2000);
            }
        });
    };
}

export function logout() {
    return function (dispatch) {
        console.log("from logout");

        const auth = getAuth();
        signOut(auth)
            .then(() => {
                console.log("logged out");
                setTimeout(() => dispatch(userSignedOut()), 2000);
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function register(user) {
    return function (dispatch) {
        console.log("from register redux");

        const db = getFirestore();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then(async (userCredential) => {
                // Signed in
                const registeredUser = userCredential.user.auth.currentUser;
                // ...
                // Add a new document in collection "users"
                const docRef = await setDoc(
                    doc(db, "users", registeredUser.uid),
                    {
                        role: "ADMIN",
                    }
                );

                console.log(registeredUser);
                alert(
                    "Admin User registered and is now currently logged in! " +
                        "\nEmail: " +
                        registeredUser.email
                );
                setTimeout(
                    () => dispatch(registerUserSuccess(registeredUser)),
                    2000
                );
                // dispatch(registerUserSuccess(userCredential));
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..

                console.error(errorCode + ": " + errorMessage);
            });
    };
}
