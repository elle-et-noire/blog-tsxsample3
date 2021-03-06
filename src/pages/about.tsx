import Head from "next/head";
import { LinkExternal } from "~/components/link-external";
import { APP_DESCRIPTION, APP_NAME, APP_URL } from "~/constants/app";
import { IconExternalLink } from "~/icons/external-link";
import { Page } from "~/layouts/page";

export default function View() {
  return (
    <Page title="About">
      <Head>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta property="og:title" content={`About ･ ${APP_NAME}`} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:url" content={`${APP_URL}about/`} />
      </Head>
      <h1>About</h1>
      <p>{APP_DESCRIPTION}</p>
      <p>
        また、このウェブサイトはオープンソースなプロジェクトです。詳細については{" "}
        <LinkExternal
          href={`https://github.com/${APP_NAME}`}
          className="inline-flex items-center"
        >
          GitHub: {APP_NAME}
          <IconExternalLink className="ml-0.5 h-4 w-4" />
        </LinkExternal>{" "}
        をご覧ください。
      </p>
    </Page>
  );
}
