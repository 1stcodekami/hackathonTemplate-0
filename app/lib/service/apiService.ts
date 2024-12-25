import { toast } from "@/components/ui/use-toast";

type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";

interface RequestOptions {
  method?: RequestMethod;
  body?: unknown; // Use 'unknown' instead of 'any' for better type safety
}

interface IResponseMeta {
  message: string;
}

interface IResponse {
  response: {
    meta: IResponseMeta;
  };
}

interface ErrorResponse {
  message: string;
}

async function makeApiCallService(
  url: string,
  options: RequestOptions = {}
): Promise<IResponse | null> {
  try {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    const response = await fetch(url, {
      method: options.method || "GET",
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined, // Optional chaining for body
    });

    if (!response.ok) {
      const res: ErrorResponse = await response.json(); // Specify the expected type here
      toast({
        variant: "destructive",
        title: "Error",
        description: res?.message,
      });
      return null;
    }

    const data: IResponse = await response.json(); // Type the data as IResponse
    if (response.ok) {
      toast({
        variant: "default",
        title: "Success",
        description: data?.response?.meta?.message,
      });
    }

    return data;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    toast({
      title: "API Service error",
      description: `An error occurred while making the API call: ${errorMessage}`,
    });

    return null;
  }
}

export default makeApiCallService;
