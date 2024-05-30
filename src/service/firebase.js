var admin = require("firebase-admin");

var serviceAccount = require("../config/firebase-key.json");
const BUCKET = "sgfns-f9246.appspot.com";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});

const backet = admin.storage().bucket();

const uploadImage = (req, res, next) => {
  if (!req.file) return;

  const image = req.file;
  const nomeArquivo = Date.now() + "." + image.originalname.split(".").pop();

  const file = backet.file(nomeArquivo);

  const stream = file.createWriteStream({
    metadata: {
      contentType: image.mimetype,
    },
  });

  stream.on("error", (error) => {
    console.error(error);
  });
  stream.on("finish", async (error) => {
    await file.makePublic();

    req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${nomeArquivo}`;
    next();
  });
  stream.end(image.buffer);
};

module.exports = uploadImage;
