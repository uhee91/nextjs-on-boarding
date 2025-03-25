import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
    reactStrictMode: false, // ✅ 리액트 StrictMode 비활성화, 랜더링 2번 하는 이슈
};

export default nextConfig;
