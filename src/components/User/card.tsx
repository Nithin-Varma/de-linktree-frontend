import Text  from "./text";
import CustomButton from "./Button";
import Container from "./Container";

interface CardProps {
    background: string;
    padding?: number;
}

const Card = ({ background, padding = 20 }: CardProps) => {
    return (
        <Container background={background} padding={padding}>
            <div className="text-only">
                <Text text="Title" fontSize={20} />
                <Text text="Subtitle" fontSize={15} />
            </div>
            <div className="buttons-only">
                <CustomButton size={"sm"} variant={""} color={""} children={undefined}/>
            </div>
        </Container>
    );
};

export default Card;

