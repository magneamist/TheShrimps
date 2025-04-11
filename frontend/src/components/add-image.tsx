"use client";
import { useState, ChangeEvent, FormEvent } from "react";

function AddImage() {
  const [file, setFile] = useState<File | null>(null);

  // Update handler to set state
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  // Function to upload the file to the backend
  const uploadFile = async (e?: FormEvent) => {
    if (e) e.preventDefault();
    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("http://localhost:8080/fileupload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const json = await res.json();
        console.log("Response is:", json);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form
        className="form flex flex-col"
        onSubmit={uploadFile}
        method="post"
        encType="multipart/form-data"
      >
        <label>Upload file here</label>
        <input
          onChange={handleFileChange}
          name="image"
          type="file"
          style={{ width: "200px", height: "100px" }}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={uploadFile}>Submit</button>
    </>
  );
}

export default AddImage;
