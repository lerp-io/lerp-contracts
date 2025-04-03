import { ChevronLeftIcon } from "lucide-react";
import { NAV, STYLE } from "@/enums";
import AccountBalanceButton from "@/components/AccountBalanceButton";
import { AnimatedLerpLogo } from "@/components/AnimatedLerpLogo";
import Link from "next/link";
import cn from "classnames";
import { DashNote } from "@/components/DashNote";
import { DashRealmsList } from "@/components/DashRealmsList";
import { DashTokenStatSections } from "@/components/DashTokenStatSections";

export default function Dash() {
  return <>
    <a href='https://lerp.io' className={cn(STYLE.BLACK_BUTTON, 'top-6 left-6 w-fit fixed gap-2')}>
      <ChevronLeftIcon className={cn(STYLE.BUTTON_ICON, 'h-5 w-5')} />
      <img src='/lerp-name.svg' alt='Lerp Landering Page' className='h-4 mr-2' />
    </a>

    <div className={STYLE.PAGE_NAV}>
      <div></div>
      <AccountBalanceButton />
    </div>
    <div className={cn(STYLE.PAGE_CONTENT, 'items-center')}>
      <div className="w-full flex items-center justify-center py-10">
        <div className="flex flex-row gap-5 items-center">
          <AnimatedLerpLogo />
          <h1 className="text-2xl font-bold">$LFT</h1>
        </div>
      </div>
      <div className="w-full items-center flex-row flex gap-8 justify-center mb-6">
        <Link href={NAV.DOCS} className={cn(STYLE.BLACK_BUTTON_CHIP, 'px-6')}>Docs</Link>
        <Link href='https://github.com/lerp-io' className="underline">source</Link>
        <Link href='https://etherscan.io/' className="underline">etherscan</Link>
      </div>

      <div className={cn(STYLE.BORDER_DASHED_TOP, 'w-full flex flex-col md:flex-row')}>
        <div className="w-full flex flex-col gap-10 p-8">
          <DashTokenStatSections />
        </div>
        <div className={cn(STYLE.BORDER_DASHED_LEFT, 'w-full')}>
          <DashNote />
          <DashRealmsList />
        </div>
      </div>

      <div className="sticky left-0 -bottom-10 bg-black/90 text-white p-6 rounded-2xl pb-16 -mb-10 max-w-[40em] w-full  backdrop-blur-3xl justify-between flex flex-row items-center mt-10">
        <div className="text-white/50 ml-4">left: <span className="text-white font-bold">20</span></div>
        <button className={cn(STYLE.BLUE_BUTTON, 'p2 w-fit p-0 px-10 ')}>Connect To Buy</button>
      </div>


    </div>
    <div className="relative  text-black pt-20 min-h-[20em] flex flex-row justify-center">
      <div>footer</div>
    </div>
  </>
}
