import styled from 'styled-components';

// Sections

const Section = styled.section`
  width: 100%;
  max-width: var(--globalContainer);
  margin: auto;
  padding: var(--globalPaddingLr) var(--globalPaddingLr) var(--globalPaddingTb)
    var(--globalPaddingLr);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FootnoteSection = styled.section`
  width: 100%;
  max-width: var(--globalContainer);
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  ol {
    list-style-type: none;
    font-size: 0.75rem;
  }
  li:before {
    content: '[' counter(section, decimal) '] ';
  }
  li {
    counter-increment: section;
    display: list-item;
    margin-bottom: 10px;
  }
  p {
    padding-left: 20px;
    position: inherit;
    margin-top: -15px !important;
    line-height: 20px;
  }
`;

const SectionGridTwoCols = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: var(--gapXL);
  row-gap: var(--gapXL);
  margin: auto;
  padding-top: var(--globalPaddingTb);
  max-width: var(--articleContainer);
  width: 100%;

  @media (max-width: 760px) {
    column-gap: var(--gapL);
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const SectionStandardsGridTwoCols = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: var(--gapXL);
  row-gap: 0rem;
  margin: auto;
  max-width: var(--articleContainer);
  width: 100%;

  @media (max-width: 760px) {
    column-gap: var(--gapL);
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const SectionGridThreeCols = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: var(--gapXL);
  row-gap: var(--gapXL);
  margin: auto;
  padding: ${({ noPaddings }) =>
    noPaddings ? '0' : 'var(--globalPaddingTb) var(--globalPaddingLr)'};
  width: 100%;
  max-width: var(--globalContainer);

  @media (max-width: 1100px) {
    column-gap: var(--gapL);
  }

  @media (max-width: 950px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const SectionFlexTwoCols = styled.section`
  width: var(--globalContainer);
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: auto;
  // margin-top: 2rem;
  // padding: var(--globalPaddingTb) var(--globalPaddingLr);
  gap: 1rem;
  max-width: var(--globalContainer);

  @media (max-width: 768px) {
    flex-direction: column;

    & > div:first-child {
      margin-bottom: var(--gapL);
    }
  }
`;

const SectionFlexTwoColsReverse = styled(SectionFlexTwoCols)`
  &&& {
    @media (max-width: 768px) {
      flex-direction: column-reverse;

      & > div:first-child {
        margin-bottom: 0;
      }
    }
  }

  & > div:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    & > div:last-child {
      margin-bottom: var(--gapL);
    }
  }
`;

// Content containers

const ColumnFlex = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;

    & img {
      width: ${({ hasImg }) => hasImg && '150px'};
    }
  }
`;

const GridTextBox = styled.section`
  display: grid;
  // row-gap: ${({ small }) => (small ? 'var(--gapSmall)' : 'var(--gapSmall)')};
  align-content: baseline;
  width: 100%;

  & ul li p {
    margin-left: 0.75rem !important;
  }

  & p {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export {
  Section,
  FootnoteSection,
  SectionGridTwoCols,
  SectionGridThreeCols,
  SectionFlexTwoCols,
  SectionFlexTwoColsReverse,
  SectionStandardsGridTwoCols,
  ColumnFlex,
  GridTextBox,
};
