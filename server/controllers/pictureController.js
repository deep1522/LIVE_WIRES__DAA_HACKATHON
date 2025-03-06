import { Jimp } from "jimp";
const pictureupload = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const filePath = path.join(req.file.destination, req.file.filename);
  const watermarkPath = path.join(__dirname, "public", "logo.png");
  try {

    const mainImage = await Jimp.read(filePath);
    const watermark = await Jimp.read(watermarkPath);

    const x = (mainImage.bitmap.width - watermark.bitmap.width) / 2;
    const y = (mainImage.bitmap.height - watermark.bitmap.height) / 2;

    
    mainImage.composite(watermark, x, y, [
      { apply: "opacity", params: [0.5] },
    ]);

    const watermarkedFilePath = path.join(
      req.file.destination,
      "watermarked-" + req.file.filename
    );
    await mainImage.write(watermarkedFilePath);


    res.download(
      watermarkedFilePath,
      "watermarked-" + req.file.filename,
      (downloadErr) => {
        if (downloadErr) {
          return res.status(500).json({
            message: "Error downloading file",
            error: downloadErr.message,
          });
        }
      }
    );
  } catch (err) {
    console.error("Error processing images:", err);
    res
      .status(500)
      .json({ message: "Error processing images", error: err.message });
  }
};

export { pictureupload };
