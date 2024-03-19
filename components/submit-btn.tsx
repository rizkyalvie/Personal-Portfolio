import React from "react";

import { FaPaperPlane } from "react-icons/fa";

import { useFormStatus } from "react-dom";

function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-x-2 h-[3rem] w-[8rem] 
                bg-gray-900 text-white rounded-full outline-none focus:scale-105 
                hover:scale-105 hover:bg-gray-950 active:scale-100 transition-all
                disabled:scale-100 disabled:bg-opacity-65
                dark:bg-white/75 dark:text-gray-950 dark:hover:bg-white/85"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-2 animate-spin rounded-full border-b-2 border-white">

        </div>
      ) : (
        <>
          Send
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />
        </>
      )}
    </button>
  );
}

export default SubmitBtn;
