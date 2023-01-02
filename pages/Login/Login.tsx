import TextField from "../../components/TextField/TextField"

export default function Login() {
    const test = (event: any) => {
        console.log(event)
    }
    return <TextField onChange={test}/>
}
