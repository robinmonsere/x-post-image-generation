import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "X post image generation",
  description: "Generate images for your social media posts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
