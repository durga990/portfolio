import { useState } from "react";
import { profile } from "../data";

// Shows the real photo from /public/durga.jpg. If it is missing, shows a clear placeholder.
export default function PhotoFrame({ className = "", rounded = false }) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <div className={`flex items-center justify-center rounded-3xl border border-dashed border-brand/60 bg-brand/5 p-6 text-center text-sm text-muted ${className}`}>
        Add your photo at<br /><code className="text-brand2">public/durga.jpg</code>
      </div>
    );
  return (
    <img
      src={profile.photo}
      alt="Durga"
      loading="eager"
      decoding="async"
      onError={() => setFailed(true)}
      className={`object-contain ${rounded ? "rounded-3xl" : ""} ${className}`}
      style={{ filter: "drop-shadow(0 0 3px #FF5A1F) drop-shadow(0 0 28px rgba(255,90,31,.55))" }}
    />
  );
}
