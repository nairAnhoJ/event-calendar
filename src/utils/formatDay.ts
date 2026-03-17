export const formatDay = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
        weekday: "long",
    })
}