import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0046/3421/4518/products/lamy-studio-fountain-pen-glacier-limited-edition-fountain-lamy-pens-extra-fine_1024x1024.png",
      subtitle: "Elegance",
      title: "LAMY, GER",
      description:
        "Lamy just never seems to disappoint its customers, and that definitely showed in this month's submissions. Many of you were looking for more of an executive pen while maintaining the quality and history that Lamy is known for. People who used it love it, and if you haven't, it's a must!",
      url: "https://www.lamy.com/en/"
    },

    {
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0046/3421/4518/products/twsbi-diamond-580-alr-fountain-pen-prussian-blue-fountain-twsbi-fine.png",
      subtitle: "For-life",
      title: "TWSBI, CH",
      description:
        "Here it is! This new TWSBI piece has been so popular among the submissions and it's no surprise to see it this month. The iconic see-through (demonstrator) barrel of the TWSBI pen is always memorizing and shows just how proud the company is of their mechanism. Enough said!",
      url: "https://www.twsbi.com/"
    },

    {
      imageSrc:
        "https://m.media-amazon.com/images/I/61AbHiqb7BL._AC_SS350_.jpg",
      subtitle: "Versatile",
      title: "Pilot, JAP",
      description:
        "Surprise, surprise. Another staple! The Pilot Metropolitan is what started our hobby for a lot of us, but it's not just a beginner-level piece. The modern design matched with its tested quality is a flawless combo that resonates through many of our daily rotations. We all know this one, and for a good reason.",
      url: "https://www.pilotpen.us/"
    }
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>This month&apos;s Hall of Fame.</HeadingTitle>
          <HeadingDescription>
            Here are some of the most popular pieces this month suggested by <u>you</u>, and hand picked by professionals.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                <Link href={card.url}>See Manufacturer</Link>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
