'use client';
import { Box, Paper } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ChatBubble({ message, type }) {
    // type can be 'query' (user) or 'response' (AI)
    const isQuery = type === 'query';
    
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: isQuery ? 'flex-end' : 'flex-start',
                mb: 2,
                width: '100%',
            }}
        >
            <Paper
                elevation={2}
                sx={{
                    p: 2,
                    maxWidth: '80%',
                    borderRadius: 2,
                    // Green for user, white for AI
                    backgroundColor: isQuery ? '#DCF8C6' : '#FFFFFF', 
                    color: '#000000',
                    position: 'relative',
                    // '&:after': {
                    //     content: '""',
                    //     position: 'absolute',
                    //     width: 0,
                    //     height: 0,
                    //     border: '8px solid transparent',
                    //     borderTopColor: isQuery ? '#DCF8C6' : '#FFFFFF',
                    //     borderBottom: 0,
                    //     [isQuery ? 'right' : 'left']: 10,
                    //     bottom: -8,
                    //     marginLeft: 0,
                    // },
                }}
                > 
                <ReactMarkdown
                    components={{
                        p: ({ node, ...props }) => (
                            <p 
                                style={{ 
                                    margin: '4px 0', 
                                }} 
                                {...props} 
                            />
                        ),
                        // 添加对链接的处理
                        a: ({ node, href, children, ...props }) => (
                            <a 
                                href={href}
                                target="_blank"  // 在新标签页打开
                                rel="noopener noreferrer"  // 安全设置
                                style={{
                                    color: '#1976d2',  // 链接颜色
                                    textDecoration: 'underline',
                                    cursor: 'pointer'
                                }}
                                {...props}
                            >
                                {children}
                            </a>
                        ),
                        code: ({ node, inline, className, children, ...props }) => {
                            const match = /language-(\w+)/.exec(className || '');
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    style={tomorrow}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}>
                    {message}
                </ReactMarkdown>

            </Paper>
        </Box>
    );
}