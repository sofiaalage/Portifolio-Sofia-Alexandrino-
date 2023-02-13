import { Container, Flex, Box } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { AboutMe as AboutMeDesinge } from "./style";
// import { HandEffect } from "../HandEffect";

export const AboutMe = (): JSX.Element => {
  return (
    <AboutMeDesinge id="AboutMe">
      <Container>
        <Flex>
  
          <Box css={{ marginLeft: "$2" }}>
          <Text type="heading1" color="grey0" css={{ marginBottom: "$2" }}>Sobre mim</Text>
            <Text type="heading5" color="grey5" css={{ marginBottom: "$2" }}>
            Desenvolvi meu interesse em tecnologia quando senti a necessidade de mudar de carreira. Trabalhava na área de
            marketing e me sentia desvalorizada profissional e intelectualmente. Sempre gostei de desafios e lógica,e foi através do
            meu marido, que trabalha na área de tecnologia, que desenvolvi o interesse pela profissão. Gosto da flexibilidade da área e
            da pluralidade das empresas. Sei que a área de tecnologia está cada vez mais focada no bem estar social, sem deixar de
            lado os desafios que precisamos para mantermos o engajamento no trabalho. Tenho como objetivo me tornar uma
            profissional de excelência. Buscando sempre focar no que é melhor para equipe e para a empresa.
            {/* <HandEffect /> */}
            </Text>
          </Box>
        </Flex>
        <Flex
          css={{
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "$2",
            fontSize:"2rem",
          }}
        >
        
        </Flex>
      </Container>
    </AboutMeDesinge>
  );
};
