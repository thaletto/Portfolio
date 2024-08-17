import { TbError404 } from "react-icons/tb";
import {acornRegular} from '@/public/fonts/font';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-charcoal text-center">
      <p className={acornRegular.className + " absolute top-1/2 transform -translate-y-1/2 flex items-center text-7xl text-customGreen"}><TbError404 className="mr-2"/> Page Not Found</p>
    </div>
  );
}