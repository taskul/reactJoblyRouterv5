import { Route, Switch } from "react-router-dom"
import useToken from "../Hooks/useToken"

export default function Users () {
    const {token, setToken} = useToken()
    return (
        <div>
            Users component

            <Switch>
                {/* <Route path="/admin" element={<Login />} />
                <Route path="/register" element={<Register />} /> */}
                <Route path="/users/*" element={<Users />} />
            </Switch>
        </div>
    )
}