
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Image, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import {NavLink} from 'react-router-dom'
import { logo } from "../../assets";
import { ChevronDown } from "../common/Chevron";
import { countries } from "../../assets/data";
import { LinkNavigate } from "../common/LinkNavigate";

export const Header = () => {
  const chevron = <ChevronDown fill="currentColor" size={12}/>

  const Countries = countries.map(country=>
    <DropdownItem
      key={country.id}
    >
      <LinkNavigate title={country.name} toRef={`/paises/${country.id}`} />
    </DropdownItem>)

  return (
    <Navbar className="shadow-md">
      <NavbarBrand>
        <Image src={logo} width={100} className="rounded" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <LinkNavigate title="Home" toRef="/"/>
        </NavbarItem>
      <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <span className="flex items-center gap-1 cursor-pointer">
                Paises {chevron}
              </span>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[200px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            {Countries}
          </DropdownMenu>
        </Dropdown>
        
        <NavbarItem>
          <LinkNavigate title="Auditorias" toRef="/audit"/>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <span className="flex items-center gap-1 cursor-pointer">
                Recursos {chevron}
              </span>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[200px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key='la_biblia'
            >
              <LinkNavigate title='La biblia del operador' toRef={`/resources`} />
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={NavLink} color="primary" href="#" to={'/create'} variant="flat">
            Nuevo Registro
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

