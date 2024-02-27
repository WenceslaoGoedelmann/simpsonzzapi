import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

/* aca creamos un hook propio.
Este hook lo utilizo cuando un usuario quiere realizar una compra y no esta logueado, lo redirjo
al login, una vez que se loguea, lo mando al checkout */

export const useRedirect = redirectTo => {
    const { currentUser } = useSelector(state => state.user)
    const navigate = useNavigate()

    useEffect(() => {
        if (currentUser) {
            navigate(redirectTo)
        }
    }, [currentUser, navigate, redirectTo])
}
