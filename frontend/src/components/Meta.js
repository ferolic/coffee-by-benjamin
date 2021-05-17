import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Coffee By Benjamin: The Home Roasting Kit',
  description:
    'Roast coffee in your own oven, with the Coffee by Benjamin Home Roasting Kit.',
  keywords: 'Buy Coffee,',
};

export default Meta;
