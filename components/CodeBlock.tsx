import React from 'react';
import CopyBoard from "./CopyBoard";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  node?: any;
  inline?: boolean;
}

const CodeBlock = ({ children, className }: CodeBlockProps) => {
  const codeText = Array.isArray(children) ? String(children[0]) : String(children);
  return <CopyBoard codeText={codeText} className={className} />;
};

export default CodeBlock;
