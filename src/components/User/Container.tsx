import { Paper } from "@material-ui/core";

type ContainerProps = {
    background: string;
    padding?: number;
    children: React.ReactNode;
}

const Container = ({background, padding = 0, children}: ContainerProps) => {
  return (
    <Paper style={{margin: "5px 0", background, padding: `${padding}px`}}>
      {children}
    </Paper>
  )
}

export default Container;
