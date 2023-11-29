import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

const serviceAccount: any = {
  type: "service_account",
  project_id: "des-loc-nuoc",
  private_key_id: "b1ff0953b5285f061ff1969c2e73047821f0b76c",
  private_key:
    // eslint-disable-next-line max-len
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCyPpN2Xr9RKVpF\nKoMwB6T9n24I1uOorTV54/zsIkvBGuCUBjmCex4WewqXVYRDkW2iL6alTqH/feLu\ncda15HUtDZlclwOk0n6Erp0eXGjhKXdsFqDJOuLgd/aY636hdCNAvf6CsHOu3RtB\nMUblNSebw2piCVCQzDHgk9n3tnhvve7fJnO0crllxOzZv5U/NNpyAJyI2P6fY9L2\nCdClGQQRBJWkJd3w6YZ36/84HyEmKvNZsdEa5IukL0n+VH77MOofQYQdw4KkvcOw\nWYW60APOdL83Xx9Z3B8iuYNwo5ZtBHzho5nkk8jPyQErARM6ng4MSXZMjVizOT76\nT3ES4pcXAgMBAAECggEAHKF+kFHxyzioPlnwzqM7tl2IkDTsRqjj4RtlAg0UPAV0\nM3K4hCQAlj3XWq2q3Cuc/6NF0mHKFb8D16dDhN4YkE8R5lR/ilchaXCe3kSbuCcv\n/pW35/rkfIfofXG+WnLMQtcB7b4oJttvSE6BA8pA/X0rNmomncue62L0bRzLRa9o\n8OGnaT672smJLqyz12le3VyWJJVEKrljDtqKAwKhxIevUUytTzqru91GFPPvL7Bg\nsfMGANuYn43owHNFocnOqVB0axetU5wMtJWtdX/AbxEm2PEVfCcKg5IBHefPOXSH\n5k+N3OmlL83XwDpAbqzoyBGTQLPdUPz0lJm7hr+JEQKBgQDYSegSWOp0/TMC648s\nqKfiK2fqwQdkrjCc8K00dztXX3UKAwSQaMiBfut0W3IvVh059ewXZ8rnqeXf2wbF\njHJmOGPEDkxYGRPbebHTmjErnyMcC2LNL1IkyJ7/9AluiQgRy0fTEjaCv4Up1686\nbumQT9NxmOtA3Jb7cDD+x/UuCQKBgQDS+H86/Ew/N0qWrvCPZcNEIaVT6EYd8VtX\neixEsURaM5rIxCxN5hiIf3uYTfmFGB6j9Q60xA9RXUYsPSES39BtTpsTXKyVZMsw\n+6xv1MQmiw7ccH4GaJY33NniA73Nr+bjTBEdaISqx41d1DUP5y0yWYAs91tsX3FS\nQ1IF0iLkHwKBgQCJjfdaM9JotN9MbCOSc3DSFmjwk/LvxRiFt0twoqPK3ZrB00mD\nziA2u1FjnwTvtgTAZ/bOq+QPka3wwIt99+SJvjM07SMApHJMkwjVWqsK4xqhK1ya\nwg2r9yun/LxC4EORjYcQZfTlEojOI639q6w/a4U+KdL0XVZocuG2J9V2gQKBgFwT\nfpwE31Y70H8BbRZ4yIdk095SIsAQxdfhB48XewiPOz/idp+tDAoO8adgaMWQ6FaQ\nrtFwPGs7dVP7fgLZ0gLS6tXBfcVaD2CahwDr8IwN5veI1UgAv4c0CZgeH+m0muWb\nHmEia7yJiYZpBpuhPtWZwFpfvvQGl9Pac+L8eqPrAoGALiMq+W8tIIFuWKcvEAZn\nXbA3avmp68PgpMDCYKrsd5LZeN3WDVsgCoGoKP/2xH3FUIq2msZKJ9+k7VgCttUD\nPb5MhuRZXypAFNQACY45ib5E6Zitg5ln0rw0avJgkCdBHOd/H5BzhIrCE5GAqg+h\nPt1e4mx7KgpSA0vNdv+O6iw=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-uy8md@des-loc-nuoc.iam.gserviceaccount.com",
  client_id: "104933364066742197924",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-uy8md%40des-loc-nuoc.iam.gserviceaccount.com",
};
const adminConfig: any = {
  databaseURL: "https://des-loc-nuoc.firebaseio.com",
};
adminConfig.credential = admin.credential.cert(serviceAccount);
admin.initializeApp(adminConfig);
const db = admin.firestore();
// const auth = admin.auth();
// db.settings({ timestampsInSnapshots: true });
// const bucket = admin.storage().bucket();

export { functions, admin, db };
