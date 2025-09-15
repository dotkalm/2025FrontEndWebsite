import fs from 'fs';
import path from 'path';
import { JSON_KEYS } from '@/types';

export function getStaticData<T = unknown>(key: JSON_KEYS): T | null{
  try {
    const staticDataPath = path.join(process.cwd(), 'public', 'static-data.json');
    const staticData = JSON.parse(fs.readFileSync(staticDataPath, 'utf8'));
    
    return staticData[key] || null;
    
  } catch (error) {
    console.error(`Error reading static data for key "${key}":`, error);
    return null 
  }
} 