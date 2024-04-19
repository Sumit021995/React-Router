export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Sumit021995')
    return response.json()
}
