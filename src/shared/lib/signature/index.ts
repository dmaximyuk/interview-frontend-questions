export const tgGenerateSign = (
  tgSecret: undefined | string,
): undefined | string => {
  if (!tgSecret) {
    return;
  }

  const params = new URLSearchParams(tgSecret);

  const authData = {
    d: Array.from(params.entries())
      .filter(([key]) => key !== "hash")
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([k, v]) => `${k}=${v}`)
      .join("\n"),
    u: {
      user: JSON.parse(params.get("user") || "") as string,
      auth_date: +(params.get("auth_date") || ""),
      query_id: params.get("query_id") || "",
    },
    h: params.get("hash") || "",
  };

  return btoa(JSON.stringify(authData));
};
