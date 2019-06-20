import loadable from "react-loadable"
import Loding from "common/loding"


const Home = loadable({
    loader:()=>import("./home"),
    loading:Loding
})
const Login = loadable({
    loader:()=>import("./login"),
    loading:Loding
})
const NotFound = loadable({
    loader:()=>import("./NotFound"),
    loading:Loding
})
const Settings = loadable({
    loader:()=>import("./settings"),
    loading:Loding
})
const User = loadable({
    loader:()=>import("./user"),
    loading:Loding
})
export {
    Home,
    Login,
    NotFound,
    Settings,
    User
}