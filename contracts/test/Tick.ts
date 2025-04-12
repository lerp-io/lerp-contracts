import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

import { tick } from '../functions/tick'; // Changed to relative path
import { LERP_TOKEN_CONTRACT_ADDRESS, CONFIG, PublicRealmConfig } from '../index';


// Example Usage (Uncommented)
async function Tick() {
	try {
		tick(0)
	} catch (e) {
		console.error("Test failed:", e);
	}
}

Tick(); // Uncommented call