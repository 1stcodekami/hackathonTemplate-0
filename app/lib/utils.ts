import { clsx, type ClassValue } from "clsx";
import { NextResponse } from "next/server";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ERROR HANDLER
export const handleError = (error: unknown): never => {
  if (error instanceof Error) {
    throw new Error(`Error: ${error.message}`);
  } else if (typeof error === "string") {
    throw new Error(error);
  } else {
    throw new Error(`Unknown error: ${JSON.stringify(error)}`);
  }
};

// Define generic types for success and error responses
interface SuccessResponse<T> {
  meta: {
    success: true;
    message: string;
  };
  data: T;
}

interface ErrorResponse {
  meta: {
    success: false;
    message: string;
  };
  data: null | unknown; // Allow `data` to be null or any other type
}

export const successResponse = <T>(
  data: T,
  message: string = "Success",
  code = 200
) => {
  const response: SuccessResponse<T> = {
    meta: {
      success: true,
      message,
    },
    data,
  };
  return NextResponse.json(response, { status: code });
};

export const errorResponse = (
  message: string = "Error",
  code = 400,
  data: unknown = null
) => {
  const response: ErrorResponse = {
    meta: {
      success: false,
      message,
    },
    data,
  };
  return NextResponse.json(response, { status: code });
};
