import Link from "next/link";

async function NewsArticle({ params, searchParams }) {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;

  return (
    <div>
      <h1>News article {articleId}</h1>
      <p>Reading in {lang}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>{" "}
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>{" "}
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}

export default NewsArticle;
