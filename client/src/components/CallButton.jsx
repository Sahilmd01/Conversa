import { VideoIcon } from "lucide-react";

function CallButton({ handleVideoCall }) {
  return (
    <div className="p-3 border-b flex items-center justify-end max-w-7xl mx-auto w-full absolute top-0">
      <button 
        onClick={handleVideoCall} 
        className="btn btn-sm relative group p-0 w-9 h-9 flex items-center justify-center rounded-full bg-primary dark:bg-primary-dark text-white shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <VideoIcon className="size-5 z-10" />
        <div className="absolute inset-0 border-2 border-primary/40 dark:border-primary-dark/40 rounded-full animate-ping group-hover:animate-none"></div>
        <div className="absolute inset-0 border border-primary/60 dark:border-primary-dark/60 rounded-full group-hover:scale-125 transition-all duration-300"></div>
      </button>
    </div>
  );
}

export default CallButton;



// import { VideoIcon } from "lucide-react";

// function CallButton({ handleVideoCall }) {
//   return (
//     <div className="p-3 border-b flex items-center justify-end max-w-7xl mx-auto w-full absolute top-0">
//       <button 
//         onClick={handleVideoCall} 
//         className="btn btn-sm relative group p-0 w-9 h-9 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
//       >
//         <VideoIcon className="size-5" />
//       </button>
//     </div>
//   );
// }

// export default CallButton;


//===========================diff icons ----------------------


// import { VideoIcon } from "lucide-react";

// function CallButton({ handleVideoCall }) {
//   return (
//     <div className="p-3 border-b flex items-center justify-end max-w-7xl mx-auto w-full absolute top-0">
//       <button 
//         onClick={handleVideoCall} 
//         className="btn btn-sm relative group p-0 w-9 h-9 flex items-center justify-center rounded-full bg-indigo-500 dark:bg-violet-400 text-white shadow-lg transition-all duration-500 hover:scale-110"
//       >
//         <VideoIcon className="size-5 group-hover:animate-pulse transition-all duration-300" />
        
//         {/* Wave rings that change with theme */}
//         <div className="absolute inset-0 border-2 border-indigo-300 dark:border-violet-200 rounded-full animate-pulse group-hover:animate-none transition-all duration-500" />
//         <div className="absolute inset-0 border border-indigo-400 dark:border-violet-300 rounded-full group-hover:scale-150 group-hover:opacity-50 transition-all duration-700" />
//         <div className="absolute inset-0 border border-indigo-200 dark:border-violet-100 rounded-full group-hover:scale-175 group-hover:opacity-25 transition-all duration-900" />
//       </button>
//     </div>
//   );
// }

// export default CallButton;