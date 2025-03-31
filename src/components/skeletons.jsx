import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export const ProductdetailsSkeleton = () => (
    <div className="bg-white rounded-xl p-6">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/products" className="text-blue-600 flex items-center gap-2">
          <FiArrowLeft /> Back to Products
        </Link>
      </div>
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-gray-200 rounded-lg aspect-square"></div>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-100 p-4 rounded-lg">
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );




 export const StaffSkeleton = () => {
    return (
      <>
        {[...Array(4)].map((_, index) => (
          <tr key={index} className='flex items-center gap-1 py-4 w-full text-[12px] px-2 sm:px-6'>
            <td className='flex gap-2 staff'>
              <span className='bg-gray-200 p-1 px-[5px] h-[1.7rem] rounded-md text-[12px] animate-pulse'></span>
              <div className='h-4 bg-gray-200 rounded w-24 animate-pulse'></div>
            </td>
            <td className='staff'>
              <div className='h-4 bg-gray-200 rounded w-32 animate-pulse'></div>
            </td>
            <td className='staff'>
              <div className='h-4 bg-gray-200 rounded w-20 animate-pulse'></div>
            </td>
            <td className='staff'>
              <div className='h-4 bg-gray-200 rounded w-16 animate-pulse'></div>
            </td>
          </tr>
        ))}
      </>
    );
  };
  