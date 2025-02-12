import { Card } from "../ui/card";
import { Container } from "../ui/container";

export default function Hero() {
  return (
    <div className="py-20">
      <Container>
        <Card className="flex h-[800px] w-full items-end justify-center">
          <h1 className="max-w-[1800px] font-oswald text-[20vw] 2xl:text-[20rem]">Angel Roman</h1>
        </Card>
      </Container>
    </div>
  );
}
