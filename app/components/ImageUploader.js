import { useState } from 'react';

const ImageUploader = ({ onUpload }) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      onUpload(`/images/${file.name}`); // O la ruta donde guardes la imagen
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="image-uploader">
      <input type="file" onChange={handleImageUpload} />
      {image && <img src={image} alt="Preview" className="image-preview" />}
      <style jsx>{`
        .image-uploader {
          margin-bottom: 20px;
        }
        .image-preview {
          margin-top: 10px;
          max-width: 100%;
          height: auto;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default ImageUploader;
