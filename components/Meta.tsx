import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="shortcut icon" href="/favicon/favicon.png" />
      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={`The Red Dice: Reseñas de juegos.`} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap"
        rel="stylesheet"
      />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-RYJCLQR57Y"
      ></script>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RYJCLQR57Y');
          `,
        }}
      />
      <link rel="stylesheet" type="text/css" href="/nprogress.css" />
    </Head>
  );
};

export default Meta;
