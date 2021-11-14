import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ReactMarkdown from 'react-markdown';
import styles from '../styles/TextEditor.module.css';

function TextEditor() {
  const [markdown, setMarkdown] = useState('');
  const [theme, setTheme] = useState('');

  useEffect(() => {
    (async function () {
      const { dracula } = await import(
        'react-syntax-highlighter/dist/esm/styles/prism'
      );

      setTheme(dracula);

      console.log(dracula);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <textarea
        placeholder="Enter markdown here"
        className={styles.editor}
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
      <div className={styles.preview}>
        <ReactMarkdown
          children={markdown}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  language={match[1]}
                  PreTag="div"
                  {...props}
                  style={theme}
                >
                  {String(children).replace(/\n$/, '')}{' '}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
    </div>
  );
}

export default TextEditor;
