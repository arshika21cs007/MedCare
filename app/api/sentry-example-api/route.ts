import { NextResponse } from "next/server";
//  it will always be evaluated on the server side
// This setting is particularly useful for routes that need to be dynamic or should not be statically optimized.
export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export function GET() {
  // as throwing an error will trigger Sentry's error tracking, capturing the error and sending it to your Sentry dashboard.
  throw new Error("Sentry Example API Route Error");
  // this code is unreachable due to the error being thrown right before it. The throw statement halts execution, so the response is never actually returned.
  return NextResponse.json({ data: "Testing Sentry Error..." });
}
