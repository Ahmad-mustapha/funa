import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

