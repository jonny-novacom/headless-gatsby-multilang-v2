// eslint-disable-next-line import/no-unresolved
import { useLocation } from '@reach/router';

import {
  ArticleTitle,
  ArticleSubtitle,
} from '../../sharedStyles/headingStyles';
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from '../../Icons/SocialIcons';
import { formatDateTime } from '../../../../functions/formatDateTime';
import { useTextDirection } from '../../../../hooks/useTextDirection';
import { usePageLocale } from '../../../../hooks/usePageLocale';
import { Navigator } from '../../../Navigator';
import { BackToBlog } from '../BackToBlog';

import {
  Wrapper,
  AuthorDateContainer,
  Author,
  ImgFullWrapper,
  ImgWrapper,
  AuthorImg,
  ArticleCover,
  SharingIcons,
  Icon,
  Dot,
  CategoryBox,
  LastModified,
  BrandImg,
  ImgBrandWrapper,
} from './styles';
import { useFormattedDate } from '../../../../hooks/useFormattedDate';

const commonExtLinkProps = {
  rel: 'noreferrer',
  target: '_blank',
};

export const ArticleHeader = ({
  authorName,
  brandTitle,
  title,
  subtitle,
  brand,
  productCode,
  productDescription,
  authorImg,
  brandImg,
  coverImg,
  lastModified,
  lastModifiedText,
  firstPublish,
  category,
}) => {
  const { href } = useLocation();
  const { pageLocale } = usePageLocale();
  const { isRtl } = useTextDirection();

  const SocialIcons = [
    {
      svgIcon: <FacebookIcon />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${href}`,
    },
    {
      svgIcon: <TwitterIcon />,
      href: `https://twitter.com/share?url=${href}`,
    },
    {
      svgIcon: <LinkedinIcon />,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${href}`,
    },
  ];

  const { formattedDate } = useFormattedDate(firstPublish);

  return (
    <>
      <Wrapper>
        <BackToBlog />
        {category && (
          <CategoryBox>
            <Navigator recordId={category.id}>{category.title}</Navigator>
          </CategoryBox>
        )}
        {/* <AuthorDateContainer>
          {authorName && (
            <>
              <Author>{authorName}</Author>
              <Dot />
            </>
          )}
          <Author as="time">{formattedDate}</Author>
        </AuthorDateContainer> */}

        <div className="flex justify-between w-full">
          <div className="grid content-end h-auto">
            <ArticleTitle
              className={brandTitle === 'Caltex' ? `text-caltexBlue` : ``}
            >
              {title}
            </ArticleTitle>
            <ArticleSubtitle>{subtitle}</ArticleSubtitle>
          </div>
          <div>
            <ImgBrandWrapper>
              <ImgWrapper>
                <BrandImg
                  as={!brandImg && 'div'}
                  style={{ visibility: !brandImg && 'hidden' }}
                  image={brandImg}
                  alt={brandTitle}
                  objectFit="contain"
                />
              </ImgWrapper>
            </ImgBrandWrapper>
          </div>
        </div>

        {/* <p>{productCode}</p>
        <LastModified>
          {`${lastModifiedText}: ${formatDateTime(lastModified, pageLocale)}`}
        </LastModified> */}
      </Wrapper>
      {/* <ImgFullWrapper $isRtl={isRtl}>
        <ImgWrapper>
          <AuthorImg
            as={!authorImg && 'div'}
            style={{ visibility: !authorImg && 'hidden' }}
            image={authorImg}
            alt={authorName}
          />
          <ArticleCover $isRtl={isRtl} image={coverImg} alt={title} />
        </ImgWrapper>
        <SharingIcons>
          {SocialIcons.map(({ svgIcon, href: socialHref }, index) => (
            <Icon
              {...commonExtLinkProps}
              href={socialHref}
              key={`socialIcon_${index}`}
            >
              {svgIcon}
            </Icon>
          ))}
        </SharingIcons>
      </ImgFullWrapper> */}
    </>
  );
};
