interface EmojiProps {
  symbol: string;
}

const Emoji = ({ symbol }: EmojiProps) => {
  return <>{symbol}</>;
};

const EmojiList = () => {
  const emojis = [
    { name: 'smile', symbol: '😁' },
    { name: 'frown', symbol: '🙁' },
  ];
  return (
    <>
      {emojis.map((emoji) => (
        <Emoji symbol={emoji.symbol} />
      ))}
    </>
  );
};

export default EmojiList;
