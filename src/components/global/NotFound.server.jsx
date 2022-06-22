import {gql, useLocalization, useShopQuery} from '@shopify/hydrogen';

import {PRODUCT_CARD_FRAGMENT} from '~/lib/fragments';
import {Button, FeaturedCollections, PageHeader, Text} from '~/components';
import {ProductSwimlane, Layout} from '~/components/index.server';

export function NotFound({response, type = 'page'}) {
  if (response) {
    response.doNotStream();
    response.status = 404;
    response.statusText = 'Not found';
  }

  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();

  const {data} = useShopQuery({
    query: NOT_FOUND_QUERY,
    variables: {
      language: languageCode,
      country: countryCode,
    },
    preload: true,
  });

  const heading = `We’ve lost this ${type}`;
  const description = `We couldn’t find the ${type} you’re looking for. Try checking the URL or heading back to the home page.`;
  const {featuredCollections, featuredProducts} = data;
  return (
    <Layout>
      <PageHeader heading={heading}>
        <Text width="narrow" as="p">
          {description}
        </Text>
        <Button width="auto" variant="secondary" to={'/'}>
          Take me to the home page
        </Button>
      </PageHeader>
      {featuredCollections.nodes.length < 2 && (
        <FeaturedCollections
          title="Popular Collections"
          data={featuredCollections.nodes}
        />
      )}
      <ProductSwimlane data={featuredProducts.nodes} />
    </Layout>
  );
}

const NOT_FOUND_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query homepage($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    featuredCollections: collections(first: 3, sortKey: UPDATED_AT) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
    featuredProducts: products(first: 12) {
      nodes {
        ...ProductCard
      }
    }
  }
`;
