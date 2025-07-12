import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import emailjs from "@emailjs/browser";

emailjs.init({ publicKey: "WM7uhj8CKsOauo9zj" }); // Replace with your EmailJS Public Key

const root = createRoot(document.getElementById("root"));
root.render(<App />);
