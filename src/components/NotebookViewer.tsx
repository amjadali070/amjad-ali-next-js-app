"use client";

import { useState } from "react";
import { FaFileDownload, FaCopy, FaCheck, FaCode, FaTerminal, FaTable, FaImage } from "react-icons/fa";

interface CellOutput {
  output_type: string;
  name?: string;
  text?: string | string[];
  data?: {
    "text/plain"?: string | string[];
    "text/html"?: string | string[];
    "image/png"?: string;
    [key: string]: unknown;
  };
  execution_count?: number | null;
}

export interface NotebookCell {
  cell_type: "markdown" | "code";
  execution_count?: number | null;
  source: string | string[];
  outputs?: CellOutput[];
}

export interface NotebookData {
  cells: NotebookCell[];
}

export default function NotebookViewer({ notebook }: { notebook: NotebookData }) {
  const [copiedCellId, setCopiedCellId] = useState<string | null>(null);

  const cells = notebook?.cells || [];

  const copyCode = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCellId(id);
    setTimeout(() => setCopiedCellId(null), 2000);
  };

  const renderMarkdown = (source: string | string[]) => {
    const text = Array.isArray(source) ? source.join("") : source;
    return text.split("\n").map((line, idx) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("# ")) {
        return <h1 key={idx} className="text-2xl font-bold text-black my-2">{trimmed.slice(2)}</h1>;
      }
      if (trimmed.startsWith("## ")) {
        return <h2 key={idx} className="text-xl font-bold text-black my-2">{trimmed.slice(3)}</h2>;
      }
      if (trimmed.startsWith("### ")) {
        return <h3 key={idx} className="text-lg font-bold text-black my-1">{trimmed.slice(4)}</h3>;
      }
      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        return <li key={idx} className="ml-4 list-disc text-sm text-black/80">{trimmed.slice(2)}</li>;
      }
      if (!trimmed) return <div key={idx} className="h-1" />;
      return <p key={idx} className="text-sm text-black/80 my-1">{line}</p>;
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Top Header & Download Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-white border-2 border-black rounded-2xl shadow-brutal">
        <div>
          <h1 className="text-xl font-black text-black">Student_Performance_Prediction.ipynb</h1>
          <p className="text-xs font-semibold text-black/60 mt-0.5">Jupyter Notebook Viewer</p>
        </div>

        <a
          href="/Student_Performance_Prediction.ipynb"
          download="Student_Performance_Prediction.ipynb"
          className="meelo-btn-primary py-2.5 px-5 text-xs font-bold inline-flex items-center justify-center gap-2"
        >
          <FaFileDownload />
          <span>Download Notebook (.ipynb)</span>
        </a>
      </div>

      {/* Cells List */}
      <div className="space-y-4">
        {cells.map((cell, index) => {
          const codeText = Array.isArray(cell.source) ? cell.source.join("") : cell.source;
          const isCode = cell.cell_type === "code";

          return (
            <div key={index} className="bg-white border-2 border-black rounded-2xl p-5 shadow-brutal space-y-3">
              {/* Prompt bar */}
              <div className="flex items-center justify-between text-xs font-mono font-bold text-black/60 border-b border-black/10 pb-2">
                <span>{isCode ? `In [${cell.execution_count ?? " "}]:` : `[Markdown Cell #${index + 1}]`}</span>
                {isCode && (
                  <button
                    onClick={() => copyCode(codeText, `cell-${index}`)}
                    className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-gray-100 border border-black hover:bg-gray-200"
                  >
                    {copiedCellId === `cell-${index}` ? <FaCheck className="text-emerald-600" /> : <FaCopy />}
                    <span>{copiedCellId === `cell-${index}` ? "Copied" : "Copy Code"}</span>
                  </button>
                )}
              </div>

              {/* Cell Content */}
              {!isCode ? (
                <div className="prose max-w-none">{renderMarkdown(cell.source)}</div>
              ) : (
                <div className="bg-[#1E1E2E] text-[#CDD6F4] p-4 rounded-xl font-mono text-xs overflow-x-auto border-2 border-black">
                  <pre className="whitespace-pre-wrap">{codeText}</pre>
                </div>
              )}

              {/* Outputs */}
              {isCode && cell.outputs && cell.outputs.length > 0 && (
                <div className="mt-3 pt-3 border-t border-black/10 space-y-3">
                  <span className="text-xs font-mono font-bold text-black/50 block">Out [{cell.execution_count ?? " "}]:</span>
                  {cell.outputs.map((output, oIdx) => {
                    if (output.output_type === "stream" && output.text) {
                      const text = Array.isArray(output.text) ? output.text.join("") : output.text;
                      return (
                        <div key={oIdx} className="bg-gray-100 p-3 rounded-lg border border-black font-mono text-xs text-black/90 overflow-x-auto">
                          <pre className="whitespace-pre-wrap">{text}</pre>
                        </div>
                      );
                    }
                    if (output.data) {
                      const html = output.data["text/html"];
                      const png = output.data["image/png"];
                      const plain = output.data["text/plain"];

                      return (
                        <div key={oIdx} className="space-y-2">
                          {html && (
                            <div
                              className="overflow-x-auto bg-white p-3 border border-black rounded-lg text-xs"
                              dangerouslySetInnerHTML={{ __html: Array.isArray(html) ? html.join("") : html }}
                            />
                          )}
                          {png && (
                            <div className="p-2 border border-black rounded-lg bg-gray-50 flex justify-center">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={`data:image/png;base64,${png}`} alt="Output plot" className="max-w-full h-auto rounded" />
                            </div>
                          )}
                          {!html && !png && plain && (
                            <pre className="bg-gray-100 p-3 rounded-lg border border-black font-mono text-xs text-black/90 overflow-x-auto whitespace-pre-wrap">
                              {Array.isArray(plain) ? plain.join("") : plain}
                            </pre>
                          )}
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
