import React, { Suspense } from 'react';
import { ChevronLeftIcon } from "lucide-react";
import { NAV, STYLE } from "@/enums";
import AccountBalanceButton from "@/components/util/AccountBalanceButton";
import cn from "classnames";
import Link from "next/link";
import { AnimatedLerpLogo } from '@/components/util/AnimatedLerpLogo';
import { getPublicRealmData } from '@/hooks/getPublicRealmData';
import { RealmBanner } from '@/components/util/RealmBanner';
import { NavBar } from '@/components/dash/NavBar';
import { Footer } from '@/components/dash/Footer';
import { RealmBackdrop } from '@/components/dash/realm/RealmBackdrop';
import { RealmDetailsAccountContent } from '@/components/dash/realm/RealmDetailsAccountContent';
import { StatEntry, StatEntrySection } from '@/components/dash/StatEntry';




export default async function RealmIdPage({ params }: { params: { realmId: string } }) {
	const { realmId } = await params;
	// Assuming getPublicRealmData returns { realmConfig, realmStatus, error }
	// And realmStatus contains the dynamic data like online counts, total stake etc.
	const { realmConfig, realmStatus, error } = await getPublicRealmData(realmId);


	if (!realmConfig) {
		return <div className="bg-red-500 text-white rounded-xl p-4">Realm config not found</div>
	}

	// const realmBannerPreview = getAPIAssetPath(realmConfig.bannerUrl) // Not used directly in this layout

	// --- Helper function to get contract URL (e.g., Etherscan) ---
	const getContractUrl = (chainId: number, address: string): string | null => {
		switch (chainId) {
			case 1: return `https://etherscan.io/address/${address}`;
			case 137: return `https://polygonscan.com/address/${address}`;
			case 80001: return `https://mumbai.polygonscan.com/address/${address}`;
			// Add other explorers
			default: return null;
		}
	};
	const contractUrl = getContractUrl(realmConfig.contract.chain, realmConfig.contract.address);


	return (
		<>
			<RealmBackdrop realmId={realmId} />
			<div className={cn(STYLE.PAGE_NAV, "absolute top-0 left-0 right-0 z-10")}> {/* Make nav absolute */}
				<Link href={NAV.DASH} className={cn(STYLE.WHITE_BUTTON, 'w-fit h-10 px-3')}> {/* Use WHITE_BUTTON */}
					<ChevronLeftIcon className={cn(STYLE.BUTTON_ICON, 'h-4 w-4')} />
					Dash
				</Link>
				{/* Use Suspense for client-side components */}
				<Suspense fallback={<div className="h-10 w-32 bg-stone-700 rounded-xl animate-pulse"></div>}>
					<AccountBalanceButton />
				</Suspense>
			</div>


			<div className={cn(STYLE.PAGE_CONTENT, 'items-center')}>

				<div className="w-full flex items-center justify-center h-[20em] flex-col gap-10">
					<div className="flex flex-row gap-5 items-center">
						<AnimatedLerpLogo />

						<h1 className="text-2xl font-bold">Realm / <span className="font-bold text-black">{realmConfig.name}</span></h1>

					</div>
					<NavBar />
				</div>




				<div className={cn(STYLE.BORDER_DASHED_TOP, 'w-full flex flex-col md:flex-row justify-center')}>

					<div className="w-full flex flex-col gap-10 p-8">
						<StatEntrySection label={'Realm Banner'}>
							<RealmBanner realmId={realmId} />
						</StatEntrySection>

						<StatEntrySection label={'Realm Stats'}>
							<StatEntry label="Version" >
								{realmConfig.currentVersion}
							</StatEntry>
						</StatEntrySection>
					</div>
					<RealmDetailsAccountContent realmConfig={realmConfig} />
				</div>

			</div>
			<Footer />

		</>



	);
}

