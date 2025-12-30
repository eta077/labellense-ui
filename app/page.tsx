"use client";
import Image from "next/image";

const COGNITO_AUTHORITY = process.env.NEXT_PUBLIC_COGNITO_AUTHORITY!;
const COGNITO_DOMAIN = process.env.NEXT_PUBLIC_COGNITO_DOMAIN!;
const CLIENT_ID = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID!;
const REDIRECT_URI = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`;

function authRedirect() {
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: "code",
    scope: "email openid phone",
    redirect_uri: REDIRECT_URI,
  });

  window.location.href = `${COGNITO_DOMAIN}/login?${params}`;
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 flex items-center">
            <Image
              src="/LabelLenseLogo.svg"
              alt="LabelLense logomark"
              width={50}
              height={50}
            />
            LabelLense
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Quickly identify allergens in your food and cosmetics by photo or product name.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <button
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            onClick={() => authRedirect()}>
            Get Started
          </button>
        </div>
        <div>
          <p
            className="text-sm">
            <a href="https://github.com/eta077/labellense-ui/issues/new">Report an issue</a>
          </p>
        </div>
      </main>
    </div>
  );
}
