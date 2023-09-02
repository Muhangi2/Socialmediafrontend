import express from "express";
import multer from "multer";

const uploadrouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    //i have removed date.now() to specift the date the image was
    //created so there is a possibility 
    //of two same name image confusing
    const uniqueFilename =  file.originalname;
    cb(null, uniqueFilename);
  },
});

const upload = multer({ storage: storage });

// Handle the POST request for uploading a single file
uploadrouter.post("/upload", upload.single("file"), (req, res) => {
  try {
    console.log("File uploaded:", req.file);
    return res.status(200).json("Image added to the public successfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default uploadrouter;
