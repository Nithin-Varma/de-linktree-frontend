interface TextProps {
    text: string;
    fontSize: number;
}

const Text = ({text, fontSize}: TextProps) => {
  return (
      <div>
         <p style={{fontSize}}>{text}</p>
      </div>
  )
}

export default Text