import { twMerge } from "tailwind-merge"
import { type ClassValue, clsx } from "clsx"

// More on shadcn.ui
export const cn = (
  ...inputs: ClassValue[]
  ) => ((twMerge(clsx(inputs))))

// A function to validate a contact form input before sending
export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

// A function to get and send an error message
export const getErrorMessage = (error: unknown): string => {

  let message: string;

  if (error instanceof Error) {  
      message = error.message
  } else if (error && typeof error === 'object' && 'message' in error) {  
      message = String(error.message)
  } else if (typeof error === 'string') {
      message = error
  } else {
      message = "Unknown error"
  }

  return message
}
