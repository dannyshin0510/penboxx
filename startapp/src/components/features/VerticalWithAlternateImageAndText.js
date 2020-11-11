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
        "https://www.pensmania.com/wp-content/uploads/2017/09/lamy-alstar-pacific-fp.jpg",
      subtitle: "Versatile",
      title: "Lamy, GER",
      description:
        "We receive countless Al-Star and Safari suggestions from you guys every month. However, with this year's- PACIFIC color, our inbox was dominated by this pen. The performance of the Lamy fountain pens have been proven by the test of time, so no need for discussion there. This stunning, cool-toned blue is a piece to awe for, and is another statement piece by the German manufacturer.",
      url: "https://www.lamy.com/en/"
    },

    {
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0046/3421/4518/products/b10d4270c9b2b90c27f648890cb6d17f.jpg?v=1562366788",
      subtitle: "For-life",
      title: "Rotring, GER",
      description:
        "This Rotring piece is a promise. It's a promise of durability, reliability, and enjoyment. With its robust metal design and its' staple red ring, those who know, knows. This pencil is a starting point for many college students undergoing rigorous courses, demanding performance.",
      url: "https://www.rotring.com/us/"
    },

    {
      imageSrc:
        "https://backpack-images.s3.amazonaws.com/item/B01EN0GEC0/main_512x512.jpg",
      subtitle: "Elegance",
      title: "Pilot, JAP",
      description:
        "We've all experienced it. Bent nibs, ink bleeds, and dried nibs. Pilot fixes that with their Vanishing Point line that tucks away the nib with a satisfying 'click.' For those of you who travel with their pens or require quick-drawing their pens, this is the perfect selection.",
      url: "https://www.pilotpen.us/"
    }
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>This month&apos;s Hall of Fame.</HeadingTitle>
          <HeadingDescription>
            Here are some of the most popular utensils this month suggested by <u>you</u>, and hand picked by professionals.
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
                <Link href={card.url}>See Event Details</Link>
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
