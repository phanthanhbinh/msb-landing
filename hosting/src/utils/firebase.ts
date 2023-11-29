import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  connectAuthEmulator,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_CONFIG_API_KEY,
  authDomain: process.env.FIREBASE_CONFIG_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_CONFIG_PROJECT_ID,
  storageBucket: process.env.FIREBASE_CONFIG_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_CONFIG_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_CONFIG_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// connectAuthEmulator(auth, "http://localhost:9099");
// auth.settings.appVerificationDisabledForTesting = true;

const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithPhoneNumber = async (phone: string, reset = false) => {
  const recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: () => {
        // sign in with phone number
        console.log("sign in with phone number");
      },
    },
    auth
  );
  recaptchaVerifier.render();
  return signInWithPhoneNumber(auth, phone, recaptchaVerifier);
};

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  localStorage.removeItem("accessToken");
  signOut(auth);
  // window.location.replace(`/login`);
};

export { auth, db, signInWithGoogle, logInWithPhoneNumber, logInWithEmailAndPassword, sendPasswordReset, logout };
