export const convertTime = (data: string) => {
    return data.split('-').reverse().join('.')
}