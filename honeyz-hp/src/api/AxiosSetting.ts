import axios from "axios";

export const YouTubeAPI = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  headers: { "Content-Type": "application/json" },
  params: { key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY },
});
