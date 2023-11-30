import { admin } from "../firebase.js";

const getAuthToken = (req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
    req.authToken = req.headers.authorization.split(" ")[1];
  } else {
    req.authToken = null;
  }
  next();
};

const authMiddleware = () => {
  return function (req, res, next) {
    getAuthToken(req, res, async () => {
      try {
        const { authToken } = req;
        console.log("authToken", authToken);
        const userInfo = await admin.auth().verifyIdToken(authToken);
        console.log("userInfo auth", userInfo);
        // try {
        //   const user = await db.collection("users").doc(`${userInfo.uid}`).get();
        //   if (user.exists) {
        //     req.user = {
        //       ...user.data(),
        //     };
        //   } else {
        //     try {
        //       await db.collection("users").doc(`${userInfo.uid}`).set({
        //         uid: userInfo.uid,
        //         name: userInfo.email,
        //         email: userInfo.email,
        //         background_url: "",
        //         created_at: new Date().getTime(),
        //       });
        //       req.user = {
        //         uid: userInfo.uid,
        //         name: userInfo.email,
        //         email: userInfo.email,
        //         background_url: "",
        //         created_at: new Date().getTime(),
        //       };
        //     } catch (error) {
        //       console.log(error);
        //     }
        //   }
        // } catch (error) {
        //   console.log(error);
        // }
        return next();
      } catch (e) {
        console.log("userInfo auth errr");
        return res.status(401).send({
          error: "You are not authorized to make this request",
        });
      }
    });
  };
};
export default authMiddleware;
