import { ButtonTypes } from "@/app/lib/type";

export default function GeneralButton({ ...props }: ButtonTypes) {
  return (
    <button
      className={`w-${props.w ? props.w : "full"} h-${
        props.h ? props.h : "10"
      }} bg-white rounded hover:bg-sky-100 hover:text-blue-600`}
      style={{ ...props.style }}
    >
      {props.children}
    </button>
  );
}
