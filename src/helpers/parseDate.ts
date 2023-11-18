export const parseDate = (date:number) => {
    return String(new Date(date * 1000).toLocaleDateString())
}