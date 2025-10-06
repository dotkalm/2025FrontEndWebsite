import Box from "@mui/material/Box";
import { Suspense } from "react";
import { getStaticData } from "@/utils/getStaticData";
import { JSON_KEYS, type TLandingPage } from "@/types";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  const {
    carousel, 
  } = getStaticData<TLandingPage>(JSON_KEYS.LANDING_PAGE) as TLandingPage;

  return (
    <Box 
      component="main"
      sx={{
        cursor: 'pointer',
        paddingTop: {
          xs: 7,
        }
      }
      }
    >
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSlider carousel={carousel} />
      </Suspense>
    </Box>
  )
}
