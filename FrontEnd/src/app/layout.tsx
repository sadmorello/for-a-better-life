import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Sidebar from "@/components/Layout/Sidebar";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "For a better Life",
  description: "",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html>
      <body>
        <Providers>
          <Flex>
            <Sidebar />
            <Box p="4" w="full">
              {children}
            </Box>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
