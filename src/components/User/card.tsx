import Text  from "./text";
import Container from "./Container";
import Button from "./Button";
import { ButtonProps } from "./Button";

interface CardProps extends ButtonProps {
    background: string;
    padding?: number;
}
const Card = ({background, padding = 20}: CardProps) => {
  return (
    <Container background={background} padding={padding}>
      <div className="text-only">
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </div>
      <div className="buttons-only">
        <Button size="small" text="Learn more" variant="contained" color="primary" children={undefined} />
      </div>
    </Container>
  )
}

export default Card;

