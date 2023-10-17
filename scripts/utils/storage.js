export const saveData = (data) => {
localStorage.setItem("data", JSON.stringify(data))
}

export const getData = () => {
    return localStorage.getItem("data")
}