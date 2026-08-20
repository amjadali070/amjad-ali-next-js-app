import { Metadata } from "next";
import fs from "fs/promises";
import path from "path";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotebookViewer, { NotebookData } from "@/components/NotebookViewer";

export const metadata: Metadata = {
  title: "Student Performance Prediction Notebook | Demo",
  description: "View and download the Student Performance Prediction Jupyter Notebook.",
};

async function getNotebookData(): Promise<NotebookData> {
  const filePath = path.join(
    process.cwd(),
    "public",
    "Student_Performance_Prediction.ipynb"
  );
  const fileContents = await fs.readFile(filePath, "utf-8");
  return JSON.parse(fileContents);
}

export default async function DemoPage() {
  const notebook = await getNotebookData();

  return (
    <div className="min-h-screen bg-meelo-offwhite flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 pt-28 sm:pt-36 pb-16">
        <NotebookViewer notebook={notebook} />
      </main>

      <Footer />
    </div>
  );
}
