import CartCard from "../Cards/CartCard"
import CartButton from "../Buttons/CartButton"
import StyledNavbar from "../styled/Navbar.styled"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        console.log(open)
    }, [open])

    const handleClick = () => {
        console.log('clicked')
        setOpen(!open)
    }

    return(
        <StyledNavbar>
                <CartButton onClick={() => handleClick()} open={open} setOpen={setOpen} />
                <CartCard open={open} />
        </StyledNavbar>
    )
}

export default Navbar;