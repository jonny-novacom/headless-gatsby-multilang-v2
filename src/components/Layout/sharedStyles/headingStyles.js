/* eslint-disable react/jsx-filename-extension */
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

// Articles

const ArticleTitle = tw.h1`
  font-medium
  leading-tight
  text-4xl
  mt-2
  mb-1
  text-texacoRed
`;

const ArticleSubtitle = tw.h2`
  font-medium
  leading-tight
  text-xl
  mt-0
  text-gray-700
`;

const SectionHeader = tw.h4`
  font-normal
  uppercase
  leading-tight
  text-base
  mt-8
  mb-6
  text-white
  bg-texacoRed
  px-3
  pt-3
  pb-2
  tracking-wider
`;

const SelectedSpecHeader = tw.h5`
  font-bold
  leading-tight
  text-base
  mt-0
  pb-2
  px-4
`;

const ApplicationHeader = styled.p`
  font-size: 1.3rem !important;
  color: #333333 !important;
  margin-top: 2rem !important;
  text-align: left;
  line-height: var(--bodyLineHeight);

  @media (max-width: 860px) {
    text-align: inherit;
  }
`;

const ApprovalsHeader = styled.p`
  font-size: 1.3rem !important;
  color: #333333 !important;
  margin-top: 0rem !important;
  text-align: left;
  line-height: var(--bodyLineHeight);

  @media (max-width: 860px) {
    text-align: inherit;
  }
`;

// Common

const SectionTitle = styled.h1`
  font-size: var(--headingL);
  color: var(--headingsColor);
  text-align: inherit;
  line-height: var(--headingsLineHeight);
  margin: auto;
  padding: ${({ noPaddings }) =>
    noPaddings ? '0' : ' 0 var(--globalPaddingLr)'};
  width: 100%;
  max-width: var(--globalContainer);

  @media (max-width: 768px) {
    font-size: calc(var(--headingL) * 0.8);
  }
`;

const HeadingMedium = styled.h1`
  font-size: var(--headingM);
  color: var(--headingsColor);
  text-align: inherit;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: var(--headingS);
  }
`;

const HeadingSmall = styled.h1`
  font-size: var(--baseL);
  color: var(--headingsColor);
  text-align: inherit;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: var(--baseXL);
  }
`;

const HeadingSmallTip = styled(HeadingSmall)`
  &&& {
    --tipWidth: 3px;
    column-gap: var(--gapSmall);
    display: grid;
    grid-template-columns: var(--tipWidth) auto;
  }
`;

const Tip = styled.span`
  width: var(--tipWidth);
  border-radius: var(--tipWidth);
  height: 100%;
  background: var(--primaryColor);
`;

const HeadingSmallWithTip = ({ children }) => (
  <HeadingSmallTip>
    <Tip />
    {children}
  </HeadingSmallTip>
);

export {
  ArticleTitle,
  ArticleSubtitle,
  SectionTitle,
  SectionHeader,
  SelectedSpecHeader,
  HeadingMedium,
  HeadingSmall,
  ApplicationHeader,
  ApprovalsHeader,
  HeadingSmallWithTip,
};
