const listRepos = async username => {
    try {
        const repos = await fetch(`https://api.github.com/users/${username}/repos`)

        const reposInJson = await repos.json()

        const markup = reposInJson.map(
            repo => `
                <li>
                    <a href="${repo.html_url}">${repo.name}</a>(⭐ ${repo.stargazers_count})
                </li>
            `
        ).join('')

        const content = document.getElementById('content')
        content.innerHTML = `
            <h2><a href="https://github.com/${username}">${username}</a></h2>
            <ul>${markup}</ul>
        `
    } catch (error) {
        console.log(error);
    }
}

listRepos('bradtraversy');