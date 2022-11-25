export default function CurrentMessage() {
    const day = new Date().getDay();
    if(day >= 1 && day <= 5) {
        return <h1>Workday</h1>
    }
    return <h1>Weekend</h1>

}
