class Github {
    constructor() {
        this.client_id = "9c61ca518a8ef004905e";
        this.client_secret = "71fda5b239a16781bf6462f95da00af10d1dfa0e";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();
        const reposData = await reposResponse.json();
        //console.log(profileData);
        return {
            profileData,
            reposData
        }
    }
};

export const github = new Github();