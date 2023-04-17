import { SelectedPage } from "@/shared/type";
import AnchorLink from "react-anchor-link-smooth-scroll";


type Props = {
    page: string;
}

const Link = ({page}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g,"") as SelectedPage
  return (
<AnchorLink className='hover:text-primary-100  cursor-pointer'>
{page}
</AnchorLink>
  )
}

export default Link