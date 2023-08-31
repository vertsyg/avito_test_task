export const checkGameFromCache = (gameId: number) => {
    const cachedGame = localStorage.getItem(`game_${gameId}`)
    if (cachedGame) {
        const gameParsed = JSON.parse(cachedGame)
        const cacheTime = gameParsed.timestamp
        const currentTime = new Date().getTime()

        if (currentTime - cacheTime < 300000) {
            return gameParsed.data
        } else {
            localStorage.removeItem(`game_${gameId}`)
        }
    }
}

export const getGameFromCache = (gameId: number) => {
    const cachedGame = localStorage.getItem(`game_${gameId}`)
    if (cachedGame) {
        return JSON.parse(cachedGame).data
    }
}