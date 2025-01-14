export function parseMarkdown(content) {
    const lines = content.split('\n');
    const result = [];
    let currentBlock = null;
    let isCodeBlock = false;
    let isEquationBlock = false;

    lines.forEach(line => {
        if (/^#{1,6}\s/.test(line)) {
            if (currentBlock) result.push(currentBlock);
            currentBlock = { type: 'heading', content: line };
        } else if (/^```/.test(line)) {
            if (isCodeBlock) {
                currentBlock.content += '\n' + line;
                result.push(currentBlock);
                currentBlock = null;
                isCodeBlock = false;
            } else {
                if (currentBlock) result.push(currentBlock);
                currentBlock = { type: 'code', content: line };
                isCodeBlock = true;
            }
        } else if (/^\$\$/.test(line)) {
            if (isEquationBlock) {
                currentBlock.content += '\n' + line;
                result.push(currentBlock);
                currentBlock = null;
                isEquationBlock = false;
            } else {
                if (currentBlock) result.push(currentBlock);
                currentBlock = { type: 'equation', content: line };
                isEquationBlock = true;
            }
        } else if (/^---$/.test(line)) {
            if (currentBlock) result.push(currentBlock);
            result.push({ type: 'divider', content: line });
            currentBlock = null;
        } else {
            if (!currentBlock) {
                currentBlock = { type: 'text', content: line };
            } else {
                currentBlock.content += '\n' + line;
            }
        }
    });

    if (currentBlock) result.push(currentBlock);

    return result;
}