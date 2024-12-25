"use server";

export async function createBillingInfo(input: unknown) {
  if (typeof input === "object" && input !== null && "name" in input) {
    // Type check for specific properties here
    return input;
  }
  throw new Error("Invalid input");
}

export async function updateBillingInfo(input: unknown, billingId: string) {
  if (!input) {
    throw new Error("Input is required");
  }
  if (typeof input === "object" && input !== null && "name" in input) {
    // Type check for specific properties here
    return billingId;
  }
  throw new Error("Invalid input");
}
