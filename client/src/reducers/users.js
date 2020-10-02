const users = (state = { repo: [] }, action) => {
    switch (action.type) {
        case 'LOAD_REPO_SUCCESS':
            console.log('inside the reducer:', action.data)
            return {

                repo: [...action.data]
            }
        case 'RESET_REPO':
            return {
                repo: []
            }

        default:
            return state
    }
}

export default users