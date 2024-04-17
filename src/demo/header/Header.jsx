import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavigationMenusData from "./NavigationMenusData";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="container">
            <div className="section header">
              <NavigationMenu className="section header navigation_menu">
                <NavigationMenuList>
                  {NavigationMenusData.map((NavigationMenuData) => (
                    <NavigationMenuItem
                      key={NavigationMenuData.menu_id}
                      className="section header navigation_menu_item"
                    >
                      <a href={NavigationMenuData.hex_link}>
                        {NavigationMenuData.name}
                      </a>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
              <Sheet>
                <SheetTrigger className="section header sheet_btn">
                  <HiOutlineMenuAlt4 className="section header sheet_btn_icon" />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <ul className="section header sheet navigation_menus_lists">
                      {NavigationMenusData.map((NavigationMenuData) => (
                        <li key={NavigationMenuData.menu_id}>
                          <a href={NavigationMenuData.hex_link}>
                            {NavigationMenuData.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
