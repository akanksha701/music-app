'use client'
import SpotifyLogo from '@/public/spotify.svg'
import Image from 'next/image'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { useClerk, useUser } from '@clerk/nextjs'
const NavbarPage = () => {
  const { signOut } = useClerk();
  const { user } = useUser();
  return (
    <Navbar isBordered>
    <NavbarContent justify="start">
      <NavbarBrand className="mr-4">
      <Image 
            src={SpotifyLogo}
            alt="Spotify Logo"
            width={30}
            height={30}
            className="mr-2"
          />
        
        <p className="sm:block font-bold text-inherit">Spotify</p>
      </NavbarBrand>
      <NavbarContent className=" sm:flex gap-3">
        <NavbarItem>
          <Link href="/" color="foreground">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/my-playlists"  color="foreground">
            My Playlists
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Search
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NavbarContent>

    <NavbarContent as="div" className="items-center" justify="end">
      <Input
        classNames={{
          base: "max-w-full sm:max-w-[10rem] h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
        }}
        placeholder="Type to search..."
        size="sm"
        // startContent={<SearchIcon size={18} />}
        type="search"
      />
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name="Jason Hughes"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2 ">
            <p className="font-semibold ">Signed in as</p>
            <p className="font-semibold ">{user?.firstName} {user?.lastName}</p>
          </DropdownItem>
          <DropdownItem key="my_profile">My profile</DropdownItem>
          <DropdownItem key="whats_new">Whats new</DropdownItem>
          <DropdownItem key="listing_history">Listing history</DropdownItem>
          <DropdownItem key="settings_and_privacy">Settings and privacy</DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={() => signOut({ redirectUrl: '/sign-in' })}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  </Navbar>

  )
}
export default NavbarPage