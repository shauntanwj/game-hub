import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "435993c71dfb43aabed327679e893c0a" },
});
