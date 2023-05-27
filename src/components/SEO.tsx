import { Helmet, HelmetProvider } from "react-helmet-async";

interface SEOProps {
  title: string;
}

export const SEO = ({ title }: SEOProps) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  );
};
