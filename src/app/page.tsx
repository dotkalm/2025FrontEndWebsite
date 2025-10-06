import Box from "@mui/material/Box";
import { Suspense } from "react";
import { getStaticData } from "@/utils/getStaticData";
import { JSON_KEYS, type TLandingPage } from "@/types";
import ImageGrid from "@/components/ImageGrid";

export default function Home() {
  const {
    carousel, 
  } = getStaticData<TLandingPage>(JSON_KEYS.LANDING_PAGE) as TLandingPage;

  return (
    <Box
      component="main"
      sx={{
        width: '100%',
        paddingTop: {
          xs: 7,
        },
        paddingBottom: {
          xs: 0,
        },
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <ImageGrid carousel={carousel} />
      </Suspense>
    </Box>
  )
}
