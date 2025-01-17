import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../uploadForm/upload.module.scss";

function UploadImage() {
  const [imageFile, setImageFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [description, setDescription] = useState("");
  const [division, setDivision] = useState("");
  const [newDivision, setNewDivision] = useState("");
  const [divisions, setDivisions] = useState([]);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    fetch("http://final-cam-server.vercel.app/image/divisions")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setDivisions(data);
        } else {
          console.error("Error: Divisions data is not an array");
        }
      })
      .catch((error) => console.error("Error fetching divisions:", error));
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
    } else {
      alert("Please select a valid image file");
    }
  };

  const handleFileNameChange = (event) => {
    setFileName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!imageFile) {
      alert("Please select an image file");
      return;
    }

    if (!fileName) {
      alert("Please enter a file name");
      return;
    }

    let finalFileName = fileName;
    if (!finalFileName.toLowerCase().endsWith(".jpg")) {
      finalFileName += ".jpg";
    }

    const formData = new FormData();
    formData.append("file", imageFile, finalFileName);
    formData.append(
      "metadata",
      JSON.stringify({
        description,
        Division: newDivision || division,
      })
    );

    setIsLoading(true);

    try {
      const response = await fetch("http://final-cam-server.vercel.app/image/create", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        setMessage("File uploaded successfully");
      } else {
        setMessage("Error uploading file");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error uploading file");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/Login");
  };

  return (
    <div className={styles["upload-container"]}>
      <h2>Upload Image</h2>
      {message && <div className={styles["message"]}>{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label htmlFor="imageFile">Select Image File:</label>
          <br />
          <input
            type="file"
            id="imageFile"
            name="imageFile"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="fileName">Enter File Name:</label>
          <br />
          <input
            type="text"
            id="fileName"
            name="fileName"
            value={fileName}
            onChange={handleFileNameChange}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="description">Description:</label>
          <br />
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="division">Select Division:</label>
          <br />
          <select
            id="division"
            name="division"
            value={division}
            onChange={(e) => setDivision(e.target.value)}
            disabled={!!newDivision}
          >
            <option value="">Select existing division</option>
            {divisions.map((div) => (
              <option key={div} value={div}>
                {div}
              </option>
            ))}
          </select>
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="newDivision">Or Enter New Division:</label>
          <br />
          <input
            type="text"
            id="newDivision"
            name="newDivision"
            value={newDivision}
            onChange={(e) => setNewDivision(e.target.value)}
            disabled={!!division}
          />
        </div>
        <button
          type="submit"
          className={styles["submit-button"]}
          disabled={isLoading}
        >
          {isLoading ? "Uploading..." : "Upload"}
        </button>
        <br />
        <button
          type="button"
          className={styles["submit-button"]}
          onClick={handleLogout}
        >
          Logout
        </button>
      </form>
    </div>
  );
}

export default UploadImage;
