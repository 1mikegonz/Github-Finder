class GitHub {
  constructor() {
    this.config = {
      headers: {
        Authorization: 'token 133e69d4e5cbfdd6046ff394efe4a344a4ad99e4'
      }
    }
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`,
      this.config
    )
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=$(this.repos_count)&sort=$(this.repos_sort)`,
      this.config
    )


    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}