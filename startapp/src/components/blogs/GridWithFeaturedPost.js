import React from "react";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as SvgDotPatternIcon } from "images/dot-pattern.svg";

const HeadingContainer = tw.div`text-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto`;

const Posts = tw.div`mt-12 flex flex-wrap -mr-3 relative`;
const Post = tw.a`flex flex-col h-full bg-gray-200 rounded`;
const PostImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 sm:h-80 bg-center bg-cover rounded-t`}
`;
const PostText = tw.div`flex-1 px-6 py-8` 
const PostTitle = tw.h6`font-bold group-hocus:text-primary-500 transition duration-300 `;
const PostDescription = tw.p``;
const AuthorInfo = tw.div`flex`;
const AuthorImage = tw.img`w-12 h-12 rounded-full mr-3`;
const AuthorTextInfo = tw.div`text-xs text-gray-600`;
const AuthorName = tw.div`font-semibold mt-2`;
const AuthorProfile = tw.div`pt-1 font-medium`;

const PostContainer = styled.div`
  ${tw`relative z-20 mt-10 sm:pt-3 pr-3 w-full sm:w-1/2 lg:w-1/3 max-w-sm mx-auto sm:max-w-none sm:mx-0`}

  ${props => props.featured && css`
    ${tw`w-full sm:w-full lg:w-2/3`}
    ${Post} {
      ${tw`sm:flex-row items-center sm:pr-3`}
    }
    ${PostImage} {
      ${tw`sm:h-80 sm:min-h-full w-full sm:w-1/2 rounded-t sm:rounded-t-none sm:rounded-l`}
    }
    ${PostText} {
      ${tw`pl-8 pr-5`}
    }
    ${PostTitle} {
      ${tw`text-2xl`}
    }
    ${PostDescription} {
      ${tw`mt-4 text-sm font-semibold text-gray-600 leading-relaxed`}
    }
    ${AuthorInfo} {
      ${tw`mt-8 flex items-center`}
    }
    ${AuthorName} {
      ${tw`mt-0 font-bold text-gray-700 text-sm`}
    }
  `}
`;

const DecoratorBlob1 = tw(SvgDotPatternIcon)`absolute bottom-0 left-0 w-32 h-32 mb-3 ml-3 transform -translate-x-1/2 translate-y-1/2 fill-current text-gray-500 opacity-50`
const DecoratorBlob2 = tw(SvgDotPatternIcon)`absolute top-0 right-0 w-32 h-32 mt-16 mr-6 transform translate-x-1/2 -translate-y-1/2 fill-current text-gray-500 opacity-50`

export default ({
  subheading = "",
  heading = "Newest Releases.",
  description = "",
  posts = [
    {
      postImageSrc:
        "https://i.etsystatic.com/11641057/r/il/5c63de/1878954993/il_570xN.1878954993_t1z4.jpg",
      authorImageSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.95&w=512&h=512&q=80",
      title: "Kaweco Sport: FOX",
      description:
        "This year's Kaweco skyline just got a fresh new color; FOX. With its elegant blend of orange and brown brushes, it matches the season of Fall, impeccably.",
      authorName: "T. Hopjker",
      authorProfile: "Blogger",
      url: "https://www.penaddict.com/blog/2020/4/22/kaweco-skyline-sport-fox-fountain-pen-review",
      featured: true
    },
    {
      postImageSrc:
        "https://images-na.ssl-images-amazon.com/images/I/618uSM%2BU2OL._AC_SL1500_.jpg",
      title: "Uni Alpha-Gel Slim: Gun Metallic",
      authorName: "P. Lee",
      url: "https://www.jetpens.com/Uni-Alpha-Gel-Slim-Mechanical-Pencil-0.5-mm-Firm-Grip-Gun-Metallic/pd/29540"
    },
    {
      postImageSrc:
        "https://cdn.shopify.com/s/files/1/2603/2528/products/Sailor-Progear-MidnightSky-3_large.jpg?v=1597784136",
      title: "Sailor Pro Gear FP: Midnight Sky",
      authorName: "L. Lawson",
      url: "https://sailorpen.com/professional-gear-midnight-sky/"
    },
    {
      postImageSrc:
        "https://www.lihit-lab.eu/image/cache/catalog/1001/bb/A-7900-16-700x700.jpg",
      title: "Lihit Lab Hinemo Wide Pen Pouch",
      authorName: "K. Jah",
      url: "https://www.lihit-lab.eu/pen-cases-and-pen-clips/lihit-lab-hinemo-wide-open-pen-pouch-en"
    },
    {
      postImageSrc:
        "https://travelerscompanyusa.com/wp-content/uploads/2020/08/2021diary_1_1080X720.jpg",
      title: "TRAVELER'S notebook 2021 series",
      authorName: "J. Agapov",
      url: "https://travelerscompanyusa.com/travelers-notebook-2021-diary/"
    }
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Posts>
          {posts.map((post, index) => (
            <PostContainer featured={post.featured} key={index}>
              <Post className="group" href={post.url}>
                <PostImage imageSrc={post.postImageSrc} />
                <PostText>
                  <PostTitle>{post.title}</PostTitle>
                  {post.featured && <PostDescription>{post.description}</PostDescription>}
                  <AuthorInfo>
                    {post.featured && <AuthorImage src={post.authorImageSrc} />}
                    <AuthorTextInfo>
                      <AuthorName>{post.authorName}</AuthorName>
                      {post.featured && <AuthorProfile>{post.authorProfile}</AuthorProfile>}
                    </AuthorTextInfo>
                  </AuthorInfo>
                </PostText>
              </Post>
            </PostContainer>
          ))}
          <DecoratorBlob1 />
          <DecoratorBlob2 />
        </Posts>
      </ContentWithPaddingXl>
    </Container>
  );
};
