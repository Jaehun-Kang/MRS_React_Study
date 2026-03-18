import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ filename, language = "javascript", code }) => {
  const [copied, setCopied] = useState(false);
  const [isDark, setIsDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setIsDark(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentStyle = isDark ? oneDark : oneLight;

  return (
    <div className="code-wrapper">
      <div className="code-filename">
        <span>{filename}</span>
        <button className="copy-button" onClick={handleCopy} title="Copy code">
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={currentStyle}
        customStyle={{
          padding: "1rem",
          margin: "0",
          borderRadius: "0 0 .5rem .5rem",
          overflowX: "auto",
          display: "block",
          maxWidth: "100%",
          boxSizing: "border-box",
          whiteSpace: "pre",
          textShadow: "none",
          fontWeight: "400",
          fontFamily:
            "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        }}
        codeTagProps={{
          style: {},
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
