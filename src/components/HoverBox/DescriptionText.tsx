interface StyleMapping {
  [key: string]: string;
}

const styleMap: StyleMapping = {
  'green': 'text-lime-500',
  'blue': 'text-blue-400',
  'red': 'text-red-500',
  'yellow': 'text-amber-400',
  // Add more color mappings as needed
};

export const DescriptionText = ({ description }: { description: string }) => {
  const parseText = (text: string): (string | JSX.Element)[] => {
    const regex = /\$\[([^\]]+)\](.*?)\[\/\]/g;
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      const [_, style, content] = match;
      const className = styleMap[style] || style; // Use mapping or raw class name

      // Add styled content
      parts.push(
        <span key={match.index} className={className}>
          {parseText(content)} {/* Recursive call for nested tags */}
        </span>
      );

      lastIndex = regex.lastIndex;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

  const parsedDescription = parseText(description);

  return <>{parsedDescription}</>;
};