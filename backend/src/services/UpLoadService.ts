import cloudinary from "../config/cloudinary";

export const uploadImageToCloudinary = async (
  url: string,
  folder: string = "Upanh",
  publicId?: string
): Promise<{ url: string; publicId: string } | null> => {
  try {
    const result = await cloudinary.uploader.upload(url, {
      folder,
      public_id: publicId,
      resource_type: "image",
    });

    console.log(" Uploaded image:", result.secure_url);

    return {
      url: result.secure_url,
      publicId: result.public_id,
    };
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    return null;
  }
};
