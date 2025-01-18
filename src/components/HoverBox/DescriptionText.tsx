import { JSX, useMemo } from 'react';

interface StyleMapping {
  [key: string]: string;
}

type ValidStyles = 'green' | 'blue' | 'red' | 'yellow';

const styleMap: StyleMapping = {
  'green': 'text-lime-500',
  'blue': 'text-blue-400',
  'red': 'text-red-500',
  'yellow': 'text-amber-400',
  // Add more color mappings as needed
};

export const DescriptionText = ({ description }: { description: string }) => {
  const parseText = useMemo(() => {
    const parse = (text: string): (string | JSX.Element)[] => {
      try {
        const regex = /\$\[([^\]]+)\](.*?)\[\/\]/g;
        const parts: (string | JSX.Element)[] = [];
        let lastIndex = 0;
        let match: RegExpExecArray | null = null;

        while ((match = regex.exec(text)) !== null) {
          // Handle text before the match, including any line breaks
          if (match.index > lastIndex) {
            const beforeText = text.slice(lastIndex, match.index);
            const lineBreakParts = beforeText.split('\n').map((part, index, array) => {
              return index === array.length - 1 ? part : [part, <br key={`br-${lastIndex}-${index}`} />];
            }).flat();
            parts.push(...lineBreakParts);
          }

          const [_, style, content] = match;
          const className = styleMap[style as ValidStyles] || style;

          parts.push(
            <span key={match.index} className={className}>
              {parse(content)}
            </span>
          );

          lastIndex = regex.lastIndex;
        }

        // Handle remaining text, including any line breaks
        if (lastIndex < text.length) {
          const remainingText = text.slice(lastIndex);
          const lineBreakParts = remainingText.split('\n').map((part, index, array) => {
            return index === array.length - 1 ? part : [part, <br key={`br-end-${index}`} />];
          }).flat();
          parts.push(...lineBreakParts);
        }

        return parts;
      } catch (error) {
        console.error('Error parsing description text:', error);
        return [text]; // Fallback to raw text on error
      }
    };

    return parse(description);
  }, [description]);

  return <>{parseText}</>;
};