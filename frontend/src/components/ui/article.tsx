"use client";

import { useUser } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';

import React from 'react';
import { useState, ChangeEvent, FormEvent } from 'react';

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | undefined>();
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [size, setSize] = useState<string>("S");
  const [price, setPrice] = useState<string>("");

  const { user } = useUser()

  // Update handler to set state
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  // Function to upload the file to the backend
  const uploadFile = async (e?: FormEvent): Promise<void> => {
    if (e) e.preventDefault();

    if (file &&user?.id &&user.fullName && title && desc && size && price) {
      const formData = new FormData;
      console.log(title, desc, size, price)
  
      formData.append("name", title)
      formData.append("seller_id", user?.id)
      formData.append("seller_name", user.fullName)
      formData.append("description", desc)
      formData.append("size", size)
      formData.append("price", price)
      formData.append("image", file)
      formData.append("imageUrl", "test")

    try {
      const res = await fetch('http://localhost:4000/item', {
        method: 'POST',
        body: formData
      });

      if (res.ok) {
        const json = await res.json();
        console.log('Response is:', json);
      } else {
        throw new Error('Something went wrong');
      }
    } catch (err) {
      console.error(err);
    }
  };
};

  return (
    <>
      <form className='form' onSubmit={uploadFile} method='post' encType='multipart/form-data'>
        <input
          onChange={handleFileChange}
          name='image'
          type='file'
          style={{ width: '200px', height: '200px' }}
        />
        <input onChange={(e) => setTitle(e.target.value)}type='text' name='title'></input>
        <input onChange={(e) => setDesc(e.target.value)}type='text' name='desc'></input>
        <input onChange={(e) => setSize(e.target.value)}type='text' name='size'></input>
        <input onChange={(e) => setPrice(e.target.value)}type='text' name='price'></input>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default FileUpload;
