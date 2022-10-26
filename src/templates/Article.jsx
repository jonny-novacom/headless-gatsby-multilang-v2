import { graphql } from 'gatsby';

import { StructuredText, renderNodeRule } from 'react-datocms';
import { isCode } from 'datocms-structured-text-utils';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { JsonToTable } from 'react-json-to-table';

import { PageWrapper } from '../components/Layout/PageWrapper';
import { ArticleHeader } from '../components/Layout/Blog/ArticleHeader';
import {
  ApplicationHeader,
  ApprovalsHeader,
  ProductDescriptionHeader,
  SectionHeader,
  SectionTitle,
  SelectedSpecHeader,
} from '../components/Layout/sharedStyles/headingStyles';
import { Navigator } from '../components/Navigator';
import { ArticleImage } from '../components/Layout/Blog/ArticleImage';
import { ArticleBody } from '../components/Layout/Blog/ArticleBody';
import { ArticleCard } from '../components/Layout/Blog/Cards/ArticleCard';
import {
  ColumnFlex,
  FootnoteSection,
  GridTextBox,
  Section,
  SectionFlexTwoCols,
  SectionGridTwoCols,
  SectionStandardsGridTwoCols,
} from '../components/Layout/sharedStyles/sectionStyles';
import {
  ApprovalsPerformance,
  TypicalTestData,
} from '../components/Layout/sharedStyles/tableStyles';

const ArticleTemplate = ({
  data: {
    datoCmsProductDataSheet: {
      id,
      structuredBody,
      title,
      subtitle,
      productCode,
      productDescription,
      author,
      brand,
      seo,
      coverImage: { coverImageData },
      meta: { updatedAt, firstPublishedAt },
      categoryLink,
      relatedPosts,
    },
    datoCmsMiscTextString: { updatedAtText, nextReadText },
  },
  pageContext,
}) => (
  <PageWrapper
    pageData={pageContext}
    seoTitle={seo?.title}
    seoDescription={seo?.seoDescription}
    seoImage={seo?.image?.seoImageUrl}
  >
    <Section as="article">
      <ArticleHeader
        title={title}
        subtitle={subtitle}
        productCode={productCode}
        productDescription={productDescription}
        authorName={author?.authorName}
        coverImg={coverImageData}
        coverImgAlt={title}
        authorImg={author?.picture?.authorPictureData}
        authorImgAlt={author?.authorName}
        brandImg={brand?.image?.brandImageData}
        brandTitle={brand?.brandName}
        firstPublish={firstPublishedAt}
        lastModified={updatedAt}
        lastModifiedText={updatedAtText}
        category={categoryLink}
      />
      <ArticleBody>
        <GridTextBox as="div">
          {structuredBody?.value && (
            <StructuredText
              key={id}
              data={structuredBody}
              customRules={[
                // eslint-disable-next-line react/no-unstable-nested-components
                renderNodeRule(isCode, ({ node: { language, code }, key }) => (
                  <div style={{ position: 'relative' }} key={key}>
                    <div id="code_tip">{language}</div>
                    <SyntaxHighlighter language={language} style={atomDark}>
                      {code}
                    </SyntaxHighlighter>
                  </div>
                )),
              ]}
              renderLinkToRecord={({
                record: { id: recordId },
                children,
                transformedMeta,
              }) => (
                <Navigator {...transformedMeta} recordId={recordId}>
                  {children}
                </Navigator>
              )}
              renderBlock={({
                record: { __typename, title, pdsDescription },
              }) => {
                switch (__typename) {
                  case 'DatoCmsPdsDescription':
                    return (
                      <GridTextBox as="div">
                        <SectionHeader
                          className={
                            brand?.brandName === 'Caltex' ? `bg-caltexBlue` : ``
                          }
                        >
                          {title}
                        </SectionHeader>
                        <StructuredText
                          data={pdsDescription}
                          renderLinkToRecord={({
                            record: { id },
                            children,
                            transformedMeta,
                          }) => (
                            <Navigator {...transformedMeta} recordId={id}>
                              {children}
                            </Navigator>
                          )}
                        />
                      </GridTextBox>
                    );
                  default:
                    return null;
                }
              }}
            />
          )}
        </GridTextBox>

        <SectionFlexTwoCols>
          <ColumnFlex>
            <GridTextBox as="div">
              {structuredBody?.value && (
                <StructuredText
                  key={id}
                  data={structuredBody}
                  customRules={[
                    // eslint-disable-next-line react/no-unstable-nested-components
                    renderNodeRule(
                      isCode,
                      ({ node: { language, code }, key }) => (
                        <div style={{ position: 'relative' }} key={key}>
                          <div id="code_tip">{language}</div>
                          <SyntaxHighlighter
                            language={language}
                            style={atomDark}
                          >
                            {code}
                          </SyntaxHighlighter>
                        </div>
                      )
                    ),
                  ]}
                  renderLinkToRecord={({
                    record: { id: recordId },
                    children,
                    transformedMeta,
                  }) => (
                    <Navigator {...transformedMeta} recordId={recordId}>
                      {children}
                    </Navigator>
                  )}
                  renderBlock={({
                    record: { __typename, title, pdsCustomerBenefits },
                  }) => {
                    switch (__typename) {
                      case 'DatoCmsPdsCustomerBenefit':
                        return (
                          <GridTextBox as="div">
                            <SectionHeader
                              className={
                                brand?.brandName === 'Caltex'
                                  ? `bg-caltexBlue`
                                  : ``
                              }
                            >
                              {title}
                            </SectionHeader>
                            <StructuredText
                              data={pdsCustomerBenefits}
                              renderLinkToRecord={({
                                record: { id },
                                children,
                                transformedMeta,
                              }) => (
                                <Navigator {...transformedMeta} recordId={id}>
                                  {children}
                                </Navigator>
                              )}
                            />
                          </GridTextBox>
                        );
                      default:
                        return null;
                    }
                  }}
                />
              )}
            </GridTextBox>
          </ColumnFlex>
          <ColumnFlex>
            <GridTextBox as="div">
              {structuredBody?.value && (
                <StructuredText
                  key={id}
                  data={structuredBody}
                  customRules={[
                    // eslint-disable-next-line react/no-unstable-nested-components
                    renderNodeRule(
                      isCode,
                      ({ node: { language, code }, key }) => (
                        <div style={{ position: 'relative' }} key={key}>
                          <div id="code_tip">{language}</div>
                          <SyntaxHighlighter
                            language={language}
                            style={atomDark}
                          >
                            {code}
                          </SyntaxHighlighter>
                        </div>
                      )
                    ),
                  ]}
                  renderLinkToRecord={({
                    record: { id: recordId },
                    children,
                    transformedMeta,
                  }) => (
                    <Navigator {...transformedMeta} recordId={recordId}>
                      {children}
                    </Navigator>
                  )}
                  renderBlock={({
                    record: {
                      __typename,
                      title,
                      pdsProductHighlights,
                      selectedStandards,
                    },
                  }) => {
                    switch (__typename) {
                      case 'DatoCmsPdsProductHighlight':
                        return (
                          <GridTextBox as="div">
                            <SectionHeader
                              className={
                                brand?.brandName === 'Caltex'
                                  ? `bg-caltexBlue`
                                  : ``
                              }
                            >
                              {title}
                            </SectionHeader>
                            <StructuredText
                              data={pdsProductHighlights}
                              renderLinkToRecord={({
                                record: { id },
                                children,
                                transformedMeta,
                              }) => (
                                <Navigator {...transformedMeta} recordId={id}>
                                  {children}
                                </Navigator>
                              )}
                            />
                          </GridTextBox>
                        );
                      case 'DatoCmsPdsSelectedSpecificationStandard':
                        return (
                          <GridTextBox as="div">
                            <SelectedSpecHeader>{title}</SelectedSpecHeader>
                            <SectionStandardsGridTwoCols>
                              {selectedStandards.map((standard, i) => (
                                <ul>
                                  <li key={i} className="mb-0">
                                    {standard.title}
                                  </li>
                                </ul>
                              ))}
                            </SectionStandardsGridTwoCols>
                          </GridTextBox>
                        );
                      default:
                        return null;
                    }
                  }}
                />
              )}
            </GridTextBox>
          </ColumnFlex>
        </SectionFlexTwoCols>

        <GridTextBox as="div">
          {structuredBody?.value && (
            <StructuredText
              key={id}
              data={structuredBody}
              customRules={[
                // eslint-disable-next-line react/no-unstable-nested-components
                renderNodeRule(isCode, ({ node: { language, code }, key }) => (
                  <div style={{ position: 'relative' }} key={key}>
                    <div id="code_tip">{language}</div>
                    <SyntaxHighlighter language={language} style={atomDark}>
                      {code}
                    </SyntaxHighlighter>
                  </div>
                )),
              ]}
              renderLinkToRecord={({
                record: { id: recordId },
                children,
                transformedMeta,
              }) => (
                <Navigator {...transformedMeta} recordId={recordId}>
                  {children}
                </Navigator>
              )}
              renderBlock={({
                record: { __typename, title, pdsApplications },
              }) => {
                switch (__typename) {
                  case 'DatoCmsPdsApplication':
                    return (
                      <GridTextBox as="div">
                        <SectionHeader
                          className={
                            brand?.brandName === 'Caltex' ? `bg-caltexBlue` : ``
                          }
                        >
                          {title}
                        </SectionHeader>
                        <StructuredText
                          data={pdsApplications}
                          renderLinkToRecord={({
                            record: { id },
                            children,
                            transformedMeta,
                          }) => (
                            <Navigator {...transformedMeta} recordId={id}>
                              {children}
                            </Navigator>
                          )}
                        />
                      </GridTextBox>
                    );
                  default:
                    return null;
                }
              }}
            />
          )}
        </GridTextBox>

        <GridTextBox as="div">
          {structuredBody?.value && (
            <StructuredText
              key={id}
              data={structuredBody}
              customRules={[
                // eslint-disable-next-line react/no-unstable-nested-components
                renderNodeRule(isCode, ({ node: { language, code }, key }) => (
                  <div style={{ position: 'relative' }} key={key}>
                    <div id="code_tip">{language}</div>
                    <SyntaxHighlighter language={language} style={atomDark}>
                      {code}
                    </SyntaxHighlighter>
                  </div>
                )),
              ]}
              renderLinkToRecord={({
                record: { id: recordId },
                children,
                transformedMeta,
              }) => (
                <Navigator {...transformedMeta} recordId={recordId}>
                  {children}
                </Navigator>
              )}
              renderBlock={({ record: { __typename, title } }) => {
                switch (__typename) {
                  case 'DatoCmsPdsApproval':
                    return (
                      <GridTextBox as="div">
                        <SectionHeader
                          className={
                            brand?.brandName === 'Caltex' ? `bg-caltexBlue` : ``
                          }
                        >
                          {title}
                        </SectionHeader>
                      </GridTextBox>
                    );
                  default:
                    return null;
                }
              }}
            />
          )}
        </GridTextBox>

        <SectionFlexTwoCols>
          <ColumnFlex>
            <GridTextBox as="div">
              {structuredBody?.value && (
                <StructuredText
                  key={id}
                  data={structuredBody}
                  customRules={[
                    // eslint-disable-next-line react/no-unstable-nested-components
                    renderNodeRule(
                      isCode,
                      ({ node: { language, code }, key }) => (
                        <div style={{ position: 'relative' }} key={key}>
                          <div id="code_tip">{language}</div>
                          <SyntaxHighlighter
                            language={language}
                            style={atomDark}
                          >
                            {code}
                          </SyntaxHighlighter>
                        </div>
                      )
                    ),
                  ]}
                  renderLinkToRecord={({
                    record: { id: recordId },
                    children,
                    transformedMeta,
                  }) => (
                    <Navigator {...transformedMeta} recordId={recordId}>
                      {children}
                    </Navigator>
                  )}
                  renderBlock={({
                    record: {
                      __typename,
                      title,
                      approvalsTitle,
                      approvalsTable,
                      performanceTable,
                    },
                  }) => {
                    switch (__typename) {
                      case 'DatoCmsPdsApproval':
                        return (
                          <GridTextBox
                            as="div"
                            className={approvalsTitle === '' ? `pb-0` : ``}
                          >
                            <SelectedSpecHeader
                              className={approvalsTitle === '' ? `pb-0` : ``}
                            >
                              {approvalsTitle}
                            </SelectedSpecHeader>
                            <ApprovalsPerformance
                              className={approvalsTable === '' ? `mb-0` : ``}
                              dangerouslySetInnerHTML={{
                                __html: approvalsTable,
                              }}
                            />
                          </GridTextBox>
                        );
                      case 'DatoCmsPdsPerformance':
                        return (
                          <GridTextBox as="div">
                            <SelectedSpecHeader>{title}</SelectedSpecHeader>
                            <ApprovalsPerformance
                              dangerouslySetInnerHTML={{
                                __html: performanceTable,
                              }}
                            />
                          </GridTextBox>
                        );
                      default:
                        return null;
                    }
                  }}
                />
              )}
            </GridTextBox>
          </ColumnFlex>
          <ColumnFlex>
            <GridTextBox as="div">
              {structuredBody?.value && (
                <StructuredText
                  key={id}
                  data={structuredBody}
                  customRules={[
                    // eslint-disable-next-line react/no-unstable-nested-components
                    renderNodeRule(
                      isCode,
                      ({ node: { language, code }, key }) => (
                        <div style={{ position: 'relative' }} key={key}>
                          <div id="code_tip">{language}</div>
                          <SyntaxHighlighter
                            language={language}
                            style={atomDark}
                          >
                            {code}
                          </SyntaxHighlighter>
                        </div>
                      )
                    ),
                  ]}
                  renderLinkToRecord={({
                    record: { id: recordId },
                    children,
                    transformedMeta,
                  }) => (
                    <Navigator {...transformedMeta} recordId={recordId}>
                      {children}
                    </Navigator>
                  )}
                  renderBlock={({
                    record: {
                      __typename,
                      title,
                      pdsSuitableForUse,
                      recommendationsTable,
                      pdsFootnote,
                    },
                  }) => {
                    switch (__typename) {
                      case 'DatoCmsPdsSuitableForUse':
                        return (
                          <>
                            <GridTextBox as="div">
                              <SelectedSpecHeader className="px-2">
                                {title}
                              </SelectedSpecHeader>

                              <ApprovalsPerformance
                                dangerouslySetInnerHTML={{
                                  __html: pdsSuitableForUse,
                                }}
                              />
                            </GridTextBox>
                          </>
                        );

                      case 'DatoCmsPdsRecommendation':
                        return (
                          <>
                            <GridTextBox as="div">
                              <SelectedSpecHeader className="pt-2">
                                {title}
                              </SelectedSpecHeader>
                              <ApprovalsPerformance
                                dangerouslySetInnerHTML={{
                                  __html: recommendationsTable,
                                }}
                              />
                            </GridTextBox>
                          </>
                        );

                      case 'DatoCmsPdsFootnote':
                        return (
                          <>
                            <GridTextBox as="div">
                              <FootnoteSection>
                                <StructuredText
                                  className="pl-4"
                                  data={pdsFootnote}
                                  renderLinkToRecord={({
                                    record: { id },
                                    children,
                                    transformedMeta,
                                  }) => (
                                    <Navigator
                                      {...transformedMeta}
                                      recordId={id}
                                    >
                                      {children}
                                    </Navigator>
                                  )}
                                />
                              </FootnoteSection>
                            </GridTextBox>
                          </>
                        );
                      default:
                        return null;
                    }
                  }}
                />
              )}
            </GridTextBox>
          </ColumnFlex>
        </SectionFlexTwoCols>

        <GridTextBox as="div">
          {structuredBody?.value && (
            <StructuredText
              key={id}
              data={structuredBody}
              customRules={[
                // eslint-disable-next-line react/no-unstable-nested-components
                renderNodeRule(isCode, ({ node: { language, code }, key }) => (
                  <div style={{ position: 'relative' }} key={key}>
                    <div id="code_tip">{language}</div>
                    <SyntaxHighlighter language={language} style={atomDark}>
                      {code}
                    </SyntaxHighlighter>
                  </div>
                )),
              ]}
              renderLinkToRecord={({
                record: { id: recordId },
                children,
                transformedMeta,
              }) => (
                <Navigator {...transformedMeta} recordId={recordId}>
                  {children}
                </Navigator>
              )}
              renderBlock={({
                record: {
                  __typename,
                  title,
                  disclaimer,
                  pdsTypicalTestDataTable,
                },
              }) => {
                switch (__typename) {
                  case 'DatoCmsPdsTypicalTestDataTable':
                    return (
                      <>
                        <GridTextBox as="div">
                          <SectionHeader
                            className={
                              brand?.brandName === 'Caltex'
                                ? `bg-caltexBlue`
                                : ``
                            }
                          >
                            {title}
                          </SectionHeader>
                          <TypicalTestData
                            dangerouslySetInnerHTML={{
                              __html: pdsTypicalTestDataTable,
                            }}
                          />
                          <p className="pt-4" style={{ fontSize: '0.75rem' }}>
                            {disclaimer}
                          </p>
                        </GridTextBox>
                      </>
                    );

                  default:
                    return null;
                }
              }}
            />
          )}
        </GridTextBox>
      </ArticleBody>
    </Section>

    {relatedPosts.length > 0 && (
      <Section>
        <SectionTitle noPaddings css={{ maxWidth: 'var(--articleContainer)' }}>
          {nextReadText}
        </SectionTitle>
        <SectionGridTwoCols>
          {relatedPosts
            .filter(({ noTranslate }) => noTranslate !== true)
            .map(
              ({
                id: relatedId,
                meta: { updatedAt: relatedUpdatedAt },
                title: relatedTitle,
                coverImage,
                subtitle: relatedSubtitle,
                author: {
                  authorName,
                  picture: { authorImageData },
                },
                categoryLink: relatedCategoryLink,
              }) => (
                <ArticleCard
                  key={relatedId}
                  recordId={relatedId}
                  date={relatedUpdatedAt}
                  category={relatedCategoryLink}
                  cardImg={coverImage.gatsbyImageData}
                  cardImgMobile={coverImage.squaredImage}
                  altImg={relatedTitle}
                  title={relatedTitle}
                  excerpt={relatedSubtitle}
                  authorImg={authorImageData}
                  authorAltImg={authorName}
                  authorName={authorName}
                />
              )
            )}
        </SectionGridTwoCols>
      </Section>
    )}
  </PageWrapper>
);

export default ArticleTemplate;

// Main query

export const query = graphql`
  query ArticleQuery($id: String!, $locale: String!) {
    datoCmsMiscTextString(locale: { eq: $locale }) {
      locale
      updatedAtText
      nextReadText
    }
    datoCmsProductDataSheet(originalId: { eq: $id }, locale: { eq: $locale }) {
      id: originalId
      locale
      originalId
      locale
      title
      seo {
        title
        seoDescription: description
        seoImage: image {
          seoImageUrl: url
        }
      }
      subtitle
      productCode
      coverImage {
        coverImageData: gatsbyImageData
      }
      meta {
        updatedAt
        firstPublishedAt
      }
      categoryLink {
        title
        id: originalId
      }
      author {
        authorName: name
        picture {
          authorPictureData: gatsbyImageData(height: 60, width: 60)
        }
      }
      brand {
        brandName: brand
        image {
          brandImageData: gatsbyImageData(height: 120, width: 100)
        }
      }
      relatedPosts {
        id: originalId
        meta {
          updatedAt
        }
        categoryLink {
          title
        }
        noTranslate
        coverImage {
          gatsbyImageData(
            width: 300
            height: 120
            placeholder: NONE
            forceBlurhash: false
          )
          squaredImage: gatsbyImageData(
            width: 100
            height: 100
            imgixParams: { ar: "1", fit: "crop" }
          )
        }
        author {
          authorName: name
          picture {
            authorImageData: gatsbyImageData(
              height: 30
              width: 30
              placeholder: NONE
            )
          }
        }
        subtitle
        title
      }
      structuredBody {
        blocks {
          ... on DatoCmsArticleBodyImage {
            __typename
            id: originalId
            image {
              gatsbyImageData
              alt
            }
          }
          ... on DatoCmsPdsDescription {
            __typename
            id: originalId
            title
            pdsDescription {
              value
            }
          }
          ... on DatoCmsPdsCustomerBenefit {
            __typename
            id: originalId
            title
            pdsCustomerBenefits {
              value
            }
          }
          ... on DatoCmsPdsProductHighlight {
            __typename
            id: originalId
            title
            pdsProductHighlights {
              value
            }
          }
          ... on DatoCmsPdsSelectedSpecificationStandard {
            __typename
            id: originalId
            title
            selectedStandards {
              title
            }
          }
          ... on DatoCmsPdsApplication {
            __typename
            id: originalId
            title
            pdsApplications {
              value
            }
          }
          ... on DatoCmsPdsApproval {
            __typename
            id: originalId
            title
            approvalsTitle
            approvalsTable
          }
          ... on DatoCmsPdsPerformance {
            __typename
            id: originalId
            title
            performanceTable
          }
          ... on DatoCmsPdsSuitableForUse {
            __typename
            id: originalId
            title
            pdsSuitableForUse
          }
          ... on DatoCmsPdsRecommendation {
            __typename
            id: originalId
            title
            recommendationsTable
          }
          ... on DatoCmsPdsFootnote {
            __typename
            id: originalId
            pdsFootnote {
              value
            }
          }
          ... on DatoCmsPdsTypicalTestDataTable {
            __typename
            id: originalId
            title
            pdsTypicalTestDataTable
            disclaimer
          }
        }
        links {
          ... on DatoCmsProductDataSheet {
            id: originalId
          }
          ... on DatoCmsOtherPage {
            id: originalId
          }
          ... on DatoCmsHomepage {
            id: originalId
          }
          ... on DatoCmsBlogRoot {
            id: originalId
          }
        }
        value
      }
    }
  }
`;
