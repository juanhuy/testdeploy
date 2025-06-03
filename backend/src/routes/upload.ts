import express from "express";
import multer from "multer";
import cloudinary from "../config/cloudinary";
import { uploadImageToCloudinary } from "../services/UpLoadService";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });
router.post("/upload-image", upload.single("image"), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      res.status(400).json({ message: "Chưa có ảnh được gửi lên" });
      return;
    }

    const base64Image = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
    const result = await uploadImageToCloudinary(base64Image, "ProductImages", `product_${Date.now()}`);

    if (!result) {
      res.status(500).json({ message: "Lỗi khi upload ảnh" });
      return;
    }

    res.status(200).json({
      message: "Tải ảnh lên thành công",
      url: result.url,
      public_id: result.publicId,
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Lỗi server khi upload ảnh" });
  }
});
