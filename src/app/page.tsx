import Box from "@mui/material/Box";
import { getStaticData } from "@/utils/getStaticData";
import { JSON_KEYS, type TLandingPage } from "@/types";
import HeroSlider from "@/components/HeroSlider";
import WasmLoader from "@/components/WasmLoader";

export default function Home() {
  const {
    carousel, 
  } = getStaticData<TLandingPage>(JSON_KEYS.LANDING_PAGE) as TLandingPage;

  return (
    <Box 
      component="main"
      sx={{
        paddingTop: {
          xs: 7,
        }
      }
      }
    >
      <HeroSlider carousel={carousel} />
      <WasmLoader />
    </Box>
  )
}
