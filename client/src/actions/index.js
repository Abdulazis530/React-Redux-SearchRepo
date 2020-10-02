
// start load adds data
export const searchRepo = (user) => ({
    type: 'SEARCH_REPO',
    user
})
export const loadRepoSucces = (data) => ({
    type: 'LOAD_REPO_SUCCESS',
    data
})

export const resetSearch = () => ({
    type: 'RESET_REPO'
})