type IApi = {
  baseUrl: string;
  headers: {}
}

class Api {
  baseUrl: string
  headers: {}

  constructor({ baseUrl, headers }: IApi) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getTweets(headerLink: string, banList: string) {
    return fetch(`${this.baseUrl}/`, {
      method: "POST",
      headers: {
        ...this.headers,
      },
      body: JSON.stringify({
        headerLink,
        banList
      }),
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }
}

export const TweetsApi = new Api({
  baseUrl: "https://topicc.fly.dev",
  headers: {
    "Content-Type": "application/json",
  },
});
