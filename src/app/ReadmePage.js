import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

const ReadmePage = async () => {
    const filePath = path.join(process.cwd(), 'README.md');
    const content = fs.readFileSync(filePath, 'utf-8');

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default ReadmePage;
