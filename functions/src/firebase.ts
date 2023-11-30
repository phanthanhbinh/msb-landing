import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

const serviceAccount: any = {
  type: "service_account",
  project_id: "msb-landing",
  private_key_id: "00e3d9b3ce6fc481cff78a3f6d88e7bf698d7864",
  private_key:
    // eslint-disable-next-line max-len
    "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDbMy1G3xXTdMS0\njrx1NO0COEE334OAq2erloVVFleUjsF9pc2Z08PUP4HSfXYSHS/mk2gV7EEGIgQo\nJv6mgrB43phQDuEtCuaZExaTOHZEMHcXnPOJQtjP0T8Xo9VzUPd/kxdzY05URWA2\nt1mOw1N4My4svTP1HfqttxuqP26wtkRocszegKVa2xTroiloyzW52Dx2dambU8tO\nl4uOVj4/pLHmWogHTxqZkkv3UybgFnVVc6wEwFtPQGO0VCqbENm79k50jVYlreyZ\nJM/3gv7UWZwBiFIdvxV/Z5k5uXeLFspmbysBPapUv/RBu6Bziv+0hiYXuzw7zVmG\n2pquFoMNAgMBAAECggEAK1qJ3/SLepEjvppkh8H6BnBd5dEdTzuXe4Z/xH5wv/8k\nIdfDPGN33ejZomoSCi8fpDkPYxahHbdonxBnWUOL57wO3/axbpkzVp9B3chTC9WS\nGGeAe2tvOlsmYWST+QTQjrjm8Hl5qo02JFxLKENVpPZqcYrSVe6h/+2xWRDGschd\nNUQAEFUmKVKx8+owo56lYVT+KUPd796l7i5i+eXpJKLnncHPL5V1s3rWgZIjmL/J\nyBEeK31I40vM5wjvRzCrlhAxw1t0o8OUquvTTVTHxfVI/V2Zrr1h6YByRP69cRCF\nw7K0Auo+B/5kq3gql9A7cuFGVH8f8DtMilpV6nyS+QKBgQDvpTcmwffFWBMw9SHe\noVt4INPK1m+Z10jtsC6G18k3qB+/HIMalFaqHCeJj8/YuHA5w8zsgtO0z5lO48iL\nT20b2/hgetAfZB4mFq0oqqocQlgza7PocBzcPP1YC2SAMOQiyIu9NUufbS20Ojww\nJ1OwM34jrQ4l951eriJqyUf0CwKBgQDqKMOK2Y7eij/JmrM8e9jy9neYuZ6CFY8d\nq+m57w7XiVZ9xrFeznq5i+clObg2W7j8GF5M3cXalnhZSpB5fc5EmGHyfMa7xK2C\nrZd8dZH16SlI7s/PYl1w7+Ru0IntXNhXWSYmd5F8WBk/jtkaRFbYoFcu5fd1ABCZ\n/86oRhX8RwKBgFOPxH9bO04wu+BiWYELup1UtQURaLC4BNH8kPyr2Znyob897eki\nuGVwk8i/wLXM+jTqNVZy9+cgTFDZ1F/fPihst1rM+C0599lIJvD7MX3RFHg5oe32\nydlx2tUMg+q/IY2PaEp9fvUEWN9zPvF7hQ73pZBDE5/hi5osFgwuS0ypAoGAfOf3\nvwZkZqNaeWFTQO1Tge8lRsulGQEFEa/VgoBZ63FwOLGXhdogrv9I8puCf0SYPamG\nC/y1APAJDKBwxs3sDL04alBS9nBome+dgh95F7MjeasiIR74dzkQImiNWpePM7Dz\nX8uiSLD57uR1PMS9itqlBvhW8wtwz6UcCLkyGxsCgYB5qnyh/l52BBVawNGBr+jM\njHUuFahTPFA+qUjW/nDrkdUmAR1WYrNubFKiWPMUg8cuK/wH25Dxdn3fMd/Yqf5z\nI4okrdQud3ESixSBgLxs/GZ3uodwBxFvZa9Yd1WSjEKgfUb4+ScptDevf8tCFqRl\n1GfavlCu4gxsanK1BevO6g==\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-i8s05@msb-landing.iam.gserviceaccount.com",
  client_id: "108786139527076607089",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  // eslint-disable-next-line max-len
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-i8s05%40msb-landing.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};
const adminConfig: any = {
  databaseURL: "https://msb-landing.firebaseio.com",
};
adminConfig.credential = admin.credential.cert(serviceAccount);
admin.initializeApp(adminConfig);
const db = admin.firestore();
// const auth = admin.auth();
// db.settings({ timestampsInSnapshots: true });
// const bucket = admin.storage().bucket();

export { functions, admin, db };
