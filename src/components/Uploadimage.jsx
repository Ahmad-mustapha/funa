export const uploadImagesToCloudinary = async (files) => {
  const cloudName = 'de30l793l';
  const uploadPreset = 'FunaApp';
  const uploadedUrls = [];

  for (const file of files) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
    formData.append('folder', 'products');

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        { method: 'POST', body: formData }
      );
      const data = await response.json();
      if (data.secure_url) {
        uploadedUrls.push(data.secure_url);
      }
    } catch (err) {
      console.error('Error uploading to Cloudinary:', err);
      throw err;
    }
  }

  return uploadedUrls;
  };