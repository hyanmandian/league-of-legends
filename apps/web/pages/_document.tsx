import React from 'react';
import Document from 'next/document';
import { extractStyles } from '@league-of-legends/design-system';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    const { id, textContent } = extractStyles();

    return {
      ...initialProps,
      styles: [
        ...(initialProps.styles as any),
        React.createElement('style', {
          id,
          key: id,
          dangerouslySetInnerHTML: {
            __html: textContent,
          },
        }),
      ],
    };
  }
}
