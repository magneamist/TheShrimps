"use client";

import { useUser } from '@clerk/nextjs';
import React, { useState, ChangeEvent, FormEvent } from 'react';

const ArticlePost: React.FC = () => {
  const [file, setFile] = useState<File | undefined>();
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [size, setSize] = useState<string>("S");
  const [price, setPrice] = useState<string>("");

  const { user } = useUser();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const uploadFile = async (e?: FormEvent): Promise<void> => {
    if (e) e.preventDefault();

    if (file && user?.id && user.fullName && title && desc && size && price) {
      const formData = new FormData();
      formData.append("name", title);
      formData.append("seller_id", user.id);
      formData.append("seller_name", user.fullName);
      formData.append("description", desc);
      formData.append("size", size);
      formData.append("price", price);
      formData.append("image", file);
      formData.append("imageUrl", "test");

      try {
        const res = await fetch('http://localhost:8080/api/item', {
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
    }
  };

  return (
    <form
      onSubmit={uploadFile}
      method='post'
      encType='multipart/form-data'
      className="flex flex-col gap-4 w-full max-w-md mx-auto mt-10"
    >

        <input
          onChange={handleFileChange}
          name='image'
          type='file'
          style={{ width: '200px', height: '200px' }}
        />
        
      {/* Checkered image upload box */}
        <input
          type="file"
          name="image"
          onChange={handleFileChange}
          className="hidden"
        />

      {/* Title input */}
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-base"
      />

      {/* Description textarea */}
      <textarea
        name="desc"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        rows={3}
        className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-base"
      />

      {/* Size input */}
      <input
        type="text"
        name="size"
        placeholder="Size"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-base"
      />

      {/* Price input */}
      <input
        type="text"
        name="price"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-base"
      />

      {/* Submit button */}
      <button
        type="submit"
        className="bg-black text-white w-full py-4 rounded-2xl text-lg hover:opacity-90 transition"
      >
        Upload the new item
      </button>
    </form>
  );
};

export default ArticlePost;
