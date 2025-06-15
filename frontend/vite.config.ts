import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./", // quan trọng khi deploy để tránh lỗi đường dẫn tương đối
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 5000,
  },
  build: {
    outDir: "dist",     // 👈 BẮT BUỘC: Thư mục đầu ra cho Vercel
    emptyOutDir: true,  // Xoá sạch dist mỗi lần build mới
  },
});
