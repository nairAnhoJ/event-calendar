export const formatDateTime = (date: string) => {
    const ndate = new Date(date.replace(" ", "T"));

    const formatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
    });

    const resultNoComma = formatter.format(ndate).replace(", ", " ");

    return resultNoComma
}