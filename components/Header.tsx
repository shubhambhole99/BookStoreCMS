import Link from "next/link";
import Image from "next/image";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Session } from "next-auth";
import { getInitials } from "@/lib/utils";

const Header = ({session}:{session:Session}) => {
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
      </Link>

      <ul  className="flex flex-row  gap-10">
        <li>
          <form
            action={async () => {
              "use server";

              await signOut();
            }}
            className="mb-10"
          >
            <Button>Logout</Button>
          </form>
        </li>
        <li>
          <Link href="/my-profile">
          {/* <p>{getInitials(session?.user?.name)}</p> */}
            <Avatar className="bg-amber-100" >
              {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
              {/* {getInitials(session?.user?.name)} */}
              <AvatarFallback  >{getInitials(session?.user?.name)||"IN"}</AvatarFallback>
            </Avatar>

          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
