export const fechCategories = async () => {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/categories`,
    {
      cache: "force-cache",
      next: {
        revalidate: 100,
      },
    }
  );
  const res = await req.json();
  return res;
};

export const fechArticles = async (filters = "") => {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=*${filters}`,
    {
      cache: "force-cache",
      next: {
        revalidate: 100,
      },
    }
  );
  const res = await req.json();
  return res;
};

export const fechCategoryArticles = async (category: string) => {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=*&filters[category][name][$eq]=${category}`,
    {
      cache: "force-cache",
      next: {
        revalidate: 100,
      },
    }
  );
  const res = await req.json();
  return res;
};
