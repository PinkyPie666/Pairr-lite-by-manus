# Pairr - High-end Matching Platform (Next.js 14)

ยินดีด้วยครับ! นี่คือโครงสร้างโปรเจกต์ **'Pairr'** ที่ถูกออกแบบโดย **Senior Frontend Architect** โดยเน้นความหรูหรา (High-end) และความสามารถในการขยายตัว (Scalability) ในระยะยาว

## 🚀 Quick Deploy

เพื่อให้คุณได้รับประสบการณ์ **Live Preview** และจัดการต่อได้ง่ายที่สุด คุณสามารถใช้ปุ่มด้านล่างนี้หลังจากอัปโหลดไฟล์ขึ้น GitHub ของคุณแล้ว:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_GITHUB_REPO_URL)

*(อย่าลืมเปลี่ยน `YOUR_GITHUB_REPO_URL` เป็น URL ของ GitHub Repository ของคุณ)*

## ✨ Key Features ที่พัฒนาเสร็จแล้ว

1.  **70-Page Scalable Architecture:** โครงสร้างโฟลเดอร์แบบ App Router ที่รองรับ 7 โมดูลหลักและ 70 หน้าไว้ล่วงหน้า พร้อมหน้า **Root Dashboard (Landing Page)**
2.  **Fix 404 Error:** เพิ่มไฟล์ `src/app/page.tsx` เพื่อให้ระบบรันหน้าแรกได้ทันทีบน Vercel/Replit
2.  **Global Theme System:** ระบบสี Black, White, และ Purple พร้อม Glassmorphism UI
3.  **Fingerprint Dashboard:** หน้าจออัปโหลดลายนิ้วมือพร้อม Step-by-step progress และ AI Processing UI
4.  **Discovery Swipe Interface:** ระบบปัด (Swipe) เพื่อหาคู่แมตช์ พร้อมแสดง AI Compatibility Score และ Category Filter (Dating, Family, Friends, Work)
5.  **Deep Profile Blueprint:** หน้าจอวิเคราะห์เชิงลึก พร้อมระบบ Video Preview 10 วินาที และ Smart Upgrade Pricing (15k/25k -> 10k upgrade)

## 🛠️ Tech Stack

*   **Framework:** Next.js 14 (App Router)
*   **Styling:** Tailwind CSS + CSS Variables for Theme
*   **Animation:** Framer Motion (Ready to use)
*   **Icons:** Lucide React
*   **Language:** TypeScript

## 📂 Project Structure

```text
src/
├── app/                  # App Router (70 pages placeholders)
├── components/           # UI Components (GlassCard, Stepper, etc.)
├── lib/                  # Utilities & Mock Data
├── styles/               # Global Styles & Animations
└── types/                # TypeScript Definitions
```

## 🚀 How to Run Locally

1.  แตกไฟล์ `.zip` ที่ได้รับ
2.  เปิด Terminal ในโฟลเดอร์โปรเจกต์
3.  รันคำสั่งติดตั้ง dependencies:
    ```bash
    npm install
    # หรือ
    pnpm install
    ```
4.  รันโปรเจกต์:
    ```bash
    npm run dev
    ```
5.  เข้าชมที่ [http://localhost:3000](http://localhost:3000)

---
**Designed with 💜 for Pairr**
