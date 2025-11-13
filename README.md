# ⚾ Diamond Data Baseball Stat Tracker

A modern, interactive baseball statistics tracker built with **React + TypeScript + Vite**, styled using **shadcn/ui**, and powered by a **Node.js/Express** backend with **OpenAI API integration** for smart insights.

---

## 🧭 Overview

Diamond Data Baseball Stat Tracker helps players, coaches, and fans record and visualize individual or team baseball performance data.  
It allows you to enter game stats, store them locally, view summaries, and calculate totals dynamically — with an intuitive UI built for speed and simplicity.

---

## 🚀 Features

- 🧮 **Track Player Stats** — record at-bats, hits, RBIs, walks, strikeouts, and more  
- 💾 **Local Storage Persistence** — data remains even after closing the browser  
- 📊 **Dynamic Totals Row** — automatic calculation of cumulative stats  
- 🧠 **AI Integration (OpenAI)** — generate insights, summaries, or performance analysis  
- 🎨 **Modern UI** — styled with shadcn/ui and TailwindCSS for a clean, responsive design  
- ⚙️ **Fast Dev Environment** — powered by Vite for instant updates

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React + TypeScript + Vite |
| **Styling/UI** | TailwindCSS + shadcn/ui components |
| **Backend** | Node.js + Express |
| **AI Integration** | OpenAI API (LangChain optional) |
| **Data Storage** | Browser LocalStorage |
| **Version Control** | Git + GitHub |

---

## ✨ New Technology: shadcn/ui

This project introduces **[shadcn/ui](https://ui.shadcn.com)** — a modern, accessible, and customizable component library built on **Radix UI** and **TailwindCSS**.

Using shadcn/ui allowed us to:
- 🚀 **Speed up UI development** with prebuilt, themeable React components  
- 🎨 **Maintain consistent design** across pages without sacrificing flexibility  
- ⚙️ **Stay TypeScript-friendly**, thanks to component-level type definitions  
- 🧩 **Customize components locally**, since shadcn/ui ships actual code rather than a package dependency  

In this app, shadcn/ui components such as `Table`, `Button`, `Dialog`, and `Card` were used to build a clean, responsive interface for displaying and managing player stats.

Example import:
```tsx
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/FSpitzock/Diamond_Data_Baseball_Stat_Tracker.git
cd Diamond_Data_Baseball_Stat_Tracker
