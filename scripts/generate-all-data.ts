import dotenv from 'dotenv';
dotenv.config();
import fs from 'fs';
import path from 'path';
import { getSanityUsingGroq } from '@/utils/groqFetcher';
import { LANDING_PAGE_QUERY } from '@/queries/landingPage';
import { 
    type TLandingPage,
    JSON_KEYS
} from '@/types';

interface TData {
    [JSON_KEYS.LANDING_PAGE]: TLandingPage | null;
}
async function generateAllData(): Promise<void> {
    const data: TData = {
        [JSON_KEYS.LANDING_PAGE]: null,
    };

    data[JSON_KEYS.LANDING_PAGE] = await getSanityUsingGroq<TLandingPage>(LANDING_PAGE_QUERY);

    console.log(data[JSON_KEYS.LANDING_PAGE]);
    const outputPath = path.join(process.cwd(), 'public', 'static-data.json');
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
}

generateAllData();