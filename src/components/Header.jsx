import { ContainerHeader, HeaderImage } from "./Header.styles"
import { H1, H2 } from "./global.styles"

/**
 * 
 * @returns {JSX.Element} Header component with image and intro text 
 */
function Header() {
    return (
        <ContainerHeader id='header' >
            <HeaderImage>
                <img
                src={'/space_rocket-3.svg'} alt='space_rocket'  
                />
            </HeaderImage>
            <div>
                <H1>Hi there! </H1>
                <H2>
                Space lover? 
                <span> Discover amazing images about the Universe here.</span>
                </H2>
            </div>
        </ContainerHeader>
    )
}

export default Header
