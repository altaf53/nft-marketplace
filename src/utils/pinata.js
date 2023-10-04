import axios from "axios";

const PINATA_API_KEY = "984f24114e385150d434";
const PINATA_SECRET_KEY =
  "2cf36354bf20dbd506fab9ae7647d0c387c35694cbf775a598f4602db7434d58";

const uploadToPinata = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(
    "https://api.pinata.cloud/pinning/pinFileToIPFS",
    formData,
    {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_SECRET_KEY,
      },
    }
  );

  return response.data.IpfsHash;
};

export { uploadToPinata };
