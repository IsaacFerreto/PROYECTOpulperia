import React, { useState } from 'react';
const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [base64, setBase64] = useState('');
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    convertToBase64(file);
  };
  const convertToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setBase64(reader.result);
    };
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }
    const imageData = {
      id: Date.now(),
      image: base64
    };
    try {
      const response = await fetch('http://localhost:3001/images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(imageData)
      });
      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};
export default UploadImage;