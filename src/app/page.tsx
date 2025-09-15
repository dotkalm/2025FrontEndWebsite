import Image from "next/image";
import Box from "@mui/material/Box";
import { getStaticData } from "@/utils/getStaticData";
import { JSON_KEYS, type TLandingPage } from "@/types";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  const {
    carousel, 
  } = getStaticData<TLandingPage>(JSON_KEYS.LANDING_PAGE) as TLandingPage;

  console.log(carousel);
  return (
    <Box 
      component="main"
    >
      <HeroSlider carousel={carousel} />
    </Box>
  )
}
