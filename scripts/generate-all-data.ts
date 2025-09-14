import dotenv from 'dotenv';
dotenv.config();
import fs from 'fs';
import path from 'path';
import { getSanityUsingGroq } from '@/utils/groqFetcher';
import { LANDING_PAGE_QUERY } from '@/queries/landingPage';

async function generateAllData(): Promise<void> {
    const landingPage = await getSanityUsingGroq<unknown[]>(LANDING_PAGE_QUERY);
    console.log(landingPage);
}

generateAllData();