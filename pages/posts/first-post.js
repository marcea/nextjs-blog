import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://online4.superoffice.com/Cust25668/CS/scripts/customer.fcgi?action=form&id=F-GktH2FBJ"
        data-style="popup"
        data-size="10"
        data-fontFamily="'Arial', Helvetica, Verdana, sans-serif"
        data-fontSize="12px"
        data-buttonColor="#0070c0"
        data-fontColor="#ffffff"
        data-buttonText="Lorem ipsum"
        defer
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />      
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}