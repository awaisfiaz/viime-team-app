import { useState, useEffect } from "react";

function Toast({ title, description, status }) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  let bgColor = "";
  switch (status) {
    case "success":
      bgColor = "bg-green-500";
      break;
    case "error":
      bgColor = "bg-red-500";
      break;
    default:
      bgColor = "bg-blue-500";
  }

  return (
    <div
      className={`fixed bottom-0 right-0 m-6 p-4 rounded-md text-white ${bgColor} shadow-lg`}
    >
      <div className="font-bold">{title}</div>
      <div>{description}</div>
    </div>
  );
}

export default Toast;
