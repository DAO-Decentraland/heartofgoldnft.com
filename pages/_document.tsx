import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/favicon/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#1D1D1D"/>
          <script dangerouslySetInnerHTML={{__html: `!function(e,t,c,n,r,a,m){e.ym=e.ym||function(){(e.ym.a=e.ym.a||[]).push(arguments)},e.ym.l=1*new Date;for(var s=0;s<document.scripts.length;s++)if(document.scripts[s].src===n)return;a=t.createElement(c),m=t.getElementsByTagName(c)[0],a.async=1,a.src=n,m.parentNode.insertBefore(a,m)}(window,document,"script","https://mc.yandex.ru/metrika/tag.js"),ym(90649262,"init",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0});`}}/>
        </Head>
	      <body>
	      <noscript dangerouslySetInnerHTML={{__html: `<div><img src="https://mc.yandex.ru/watch/90649262" style="position:absolute; left:-9999px;" alt="" /></div>`}}/>
	      <Main/>
	      <NextScript/>
	      </body>
      </Html>
    )
  }
	
	static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
