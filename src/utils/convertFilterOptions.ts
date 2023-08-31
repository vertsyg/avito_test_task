export const convertFilterOption = (option:string) => {
    if (option === 'All Platforms' || option === 'All Genres') {
        return 'all'
    } else if (option === 'PC (Windows)') {
        return 'pc'
    } else if (option === 'Web Browser') {
        return 'browser'
    } else {
        return option.toLowerCase().replace(' ', '-')
    }
}