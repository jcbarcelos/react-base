import { toast } from "react-toastify";

export default function Notify(type, mensage) {
  return toast(`"${mensage}"`, {
    type: `${type}`
  });
}
