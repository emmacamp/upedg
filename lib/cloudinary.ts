import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dd6rl6tru",
  api_key: "978649788358563",
  api_secret: "qF_YZUetkNzZeTQRgjLciydnOTo",
});

export default async function uploadImageToCloudinary(file: any) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          tags: ["upedg-img"],
          folder: "upedg",
        },
        (error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        }
      )
      .end(file);
  });
}
