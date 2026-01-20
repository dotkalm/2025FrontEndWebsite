'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  height: string;
  controls?: boolean;
}

interface TableRowData {
  id: string;
  media: MediaItem[];
  description: React.ReactNode;
  mediaWidth?: string;
  descriptionWidth?: string;
  mediaHeight?: string;
}

const tableData: TableRowData[] = [
  {
    id: 'row-1',
    media: [
      {
        type: 'image',
        src: 'https://github.com/user-attachments/assets/c8676e21-c833-44de-9020-98b5219523e6',
        alt: 'francesca',
        height: '240px'
      }
    ],
    description: 'A programmer, an artist, a father',
    mediaWidth: '30%'
  },
  {
    id: 'row-1-2',
    media: [
      {
        type: 'image',
        src: 'https://github.com/user-attachments/assets/478026a5-c1c6-4392-9a30-f7d426ff26f2',
        alt: 'svg',
        height: '240px'
      }
    ],
    description: (
      <>
        I made a webcam that creates new SVG markup every frame. <br/> use it here 👉 <a href="https://s-v-g.xyz">https://s-v-g.xyz</a>
      </>
    ),
    mediaWidth: '30%',
    descriptionWidth: '50%'
  },
  {
    id: 'row-1-3',
    media: [
      {
        type: 'image',
        src: 'https://github.com/user-attachments/assets/34473723-04a6-4008-98ec-0b4933c179a7',
        alt: 'booted',
        height: '240px'
      }
    ],
    description: (
      <>
        I'm using machine learning to prank people that their car got booted.  <a href="https://github.com/dotkalm/BootedWebAppFrontend/tree/main">View it on github</a>
      </>
    ),
    mediaWidth: '30%',
    descriptionWidth: '50%'
  },
  {
    id: 'row-1-4',
    media: [
      {
        type: 'image',
        src: 'https://github.com/user-attachments/assets/de0fe903-b18b-4cac-8de6-4777e2cb5ee4',
        alt: 'garage door live',
        height: '240px'
      }
    ],
    description: (
      <>
        During covid I set up a webhook for my garage door and made my <a href="https://github.com/dotkalm/garageDoor">garage door activity public</a>
      </>
    ),
    mediaWidth: '30%',
    descriptionWidth: '50%'
  },
  {
    id: 'row-1-5',
    media: [
      {
        type: 'image',
        src: 'https://github.com/user-attachments/assets/ebcb5228-b9d6-4308-a30a-0340f2d3455c',
        alt: 'wordle',
        height: '240px'
      }
    ],
    description: (
      <>
      In 2021 I published a browser extension for solving wordle. <a href="https://github.com/dotkalm/WordleSolver/tree/main">View the repo </a>
      </>
    ),
    mediaWidth: '30%',
    descriptionWidth: '50%'
  },
  {
    id: 'row-2',
    media: [
      {
        type: 'image',
        src: 'https://github.com/user-attachments/assets/01fc1048-fe1b-4cbd-905f-cb6808c62741',
        alt: 'pups',
        height: '240px'
      }
    ],
    description: (
      <>
        In 2010 I had some viral fame for creating a grid of found youtube videos showing dogs freaking out to the law&order theme song.
        <br /><br />
        https://boingboing.net/2010/02/23/rachel-maddow-on-dog.html
      </>
    ),
    mediaWidth: '30%',
    descriptionWidth: '50%'
  },
  {
    id: 'row-3',
    media: [
      {
        type: 'image',
        src: 'https://github.com/user-attachments/assets/71e56717-b864-4edc-ac76-30a665791371',
        alt: 'bob',
        height: '240px'
      }
    ],
    description: (
      <>
        I was a founder of NastyNets, an influential <em>web surfing blog</em>. Here I am at the Sundance Festival showing Robert Redford all of my <em>Taco Related Purchases of 2007</em>.
        <br /><br />
        https://anthology.rhizome.org/nasty-nets
      </>
    ),
    mediaWidth: '30%'
  },
  {
    id: 'row-4',
    media: [
      {
        type: 'image',
        src: 'https://github.com/user-attachments/assets/a2f88207-f79e-450b-bb78-86809bcc6308',
        alt: 'legendary-account-FREE',
        height: '240px'
      }
    ],
    description: (
      <>
        The first work I had shown in a museum was an installation of questions I asked on Yahoo! Answers. Here is <em>Legendary Account</em> at the New Museum in NYC in 2009.
      </>
    ),
    mediaWidth: '30%'
  },
  {
    id: 'row-5',
    media: [
      {
        type: 'video',
        src: 'https://github.com/user-attachments/assets/a2782f94-dd35-412d-b7bb-9966356aa75e',
        alt: 'DJ Filetype SWF',
        height: '120px',
        controls: true
      }
    ],
    description: (
      <>
        I used to be DJ Filetype SWF, <em>web-surfing music performance</em>, where I would DJ found websites that used autoplay. Video is from AND Festival in Liverpool, UK, 2011.
      </>
    ),
    mediaWidth: '30%',
    mediaHeight: '130px'
  },
  {
    id: 'row-6',
    media: [
      {
        type: 'image',
        src: 'https://github.com/user-attachments/assets/deb8f96e-933e-48ca-a0ed-9bc5a2a664ee',
        alt: 'modern office furniture',
        height: '180px'
      }
    ],
    description: 'I recieved an MFA from Yale in 2013. I made these custom roller shades for my thesis show.',
    mediaWidth: '30%'
  },
  {
    id: 'row-7',
    media: [
      {
        type: 'image',
        src: 'https://github.com/user-attachments/assets/d48b0121-dc5a-4f92-b832-ae3fddb653bd',
        alt: 'modern office furniture',
        height: '180px'
      },
      {
        type: 'image',
        src: 'https://github.com/user-attachments/assets/7d7f598d-d479-413c-b775-defa46efe686',
        alt: 'modern office furniture',
        height: '180px'
      }
    ],
    description: (
      <>
        Here are some modern office furnishing from my first solo exhibition: <em>Soft Laws</em> at American Contemporary, NY, 2013.
      </>
    ),
    mediaWidth: '30%'
  },
  {
    id: 'row-8',
    media: [
      {
        type: 'image',
        src: 'https://github.com/user-attachments/assets/8919c6cc-cf93-4853-a146-68e8d9bf6b13',
        alt: 'press conference',
        height: '240px'
      }
    ],
    description: (
      <>
        In 2015 collectors commissioned me to dig through their stuff so that I could find microphone shaped objects to make a <em>press conference sculpture</em> as a portrait of them.
      </>
    ),
    mediaWidth: '30%'
  },
  {
    id: 'row-9',
    media: [
      {
        type: 'image',
        src: 'https://github.com/user-attachments/assets/dcfe8b63-74c8-4513-93fb-5d70d4d3d659',
        alt: 'Hammer Museum',
        height: '240px'
      }
    ],
    description: (
      <>
        I made large scale paintings of websites and showed them at the <strong>Hammer Museum</strong> in 2016.
      </>
    ),
    mediaWidth: '30%'
  }
];

export default function AboutTable() {
  const searchParams = useSearchParams();
  const isFullscreen = searchParams.get('fullscreen') === 'true';
  const [expanded, setExpanded] = useState(false);
  
  const [firstRow, ...remainingRows] = tableData;
  
  if (isFullscreen) {
    return null;
  }

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'hidden',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: {
          xs: 0,
          md: 2,
        },
        backgroundColor: 'transparent',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: {
            xs: '100%',
            md: '80%',
            lg: '70%',
          },
          maxWidth: '100%',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          padding: {
            xs: 1,
            sm: 1.5,
            md: 2,
          },
          paddingX: {
            xs: 0.5,
            sm: 1,
            md: 2,
          },
          background: {
            xs: 'white',
            sm: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.65) 100%)',
          },
          backdropFilter: {
            xs: 'none',
            sm: 'blur(30px) saturate(200%)',
          },
          WebkitBackdropFilter: {
            xs: 'none',
            sm: 'blur(30px) saturate(200%)',
          },
          border: {
            xs: '1px solid #ddd',
            sm: '1px solid rgba(255, 255, 255, 0.4)',
          },
          borderTop: {
            xs: '1px solid #ddd',
            sm: '1px solid rgba(255, 255, 255, 0.6)',
          },
          borderLeft: {
            xs: '1px solid #ddd',
            sm: '1px solid rgba(255, 255, 255, 0.6)',
          },
          boxShadow: {
            xs: '1px 1px 5px rgba(0,0,0,0.4)',
            sm: `
              0 8px 32px 0 rgba(31, 38, 135, 0.15),
              inset 0 1px 0 0 rgba(255, 255, 255, 0.6),
              inset -1px 0 0 0 rgba(255, 255, 255, 0.3),
              0 1px 3px rgba(0, 0, 0, 0.05)
            `,
          },
          borderRadius: {
            xs: 2,
            md: 3,
          },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: {
              xs: 'none',
              sm: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)',
            },
            pointerEvents: 'none',
          }
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {/* Always show first row */}
          <Box
            key={firstRow.id}
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                md: 'row',
              },
              width: '100%',
              backgroundColor:'transparent',
              gap: {
                xs: 1,
                md: 2,
              },
            }}
          >
            <Box
              sx={{
                width: {
                  xs: '100%',
                  md: firstRow.mediaWidth || '30%',
                },
                minHeight: firstRow.mediaHeight,
                verticalAlign: 'top',
                padding: {
                  xs: 1,
                  md: 2,
                },
                boxShadow: {
                  xs: `
                    0 8px 32px 0 rgba(31, 38, 135, 0.15),
                    inset 0 1px 0 0 rgba(255, 255, 255, 0.6),
                    inset -1px 0 0 0 rgba(255, 255, 255, 0.3),
                    0 1px 3px rgba(0, 0, 0, 0.05)
                  `,
                  sm: '1px 1px 5px rgba(0,0,0,0.4)',
                },
                border: {
                  xs: '1px solid rgba(255, 255, 255, 0.4)',
                  sm: '1px solid #ddd',
                },
                borderTop: {
                  xs: '1px solid rgba(255, 255, 255, 0.6)',
                  sm: 'none',
                },
                borderLeft: {
                  xs: '1px solid rgba(255, 255, 255, 0.6)',
                  sm: 'none',
                },
                display: 'flex',
                background: {
                  xs: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.65) 100%)',
                  sm: 'white',
                },
                backdropFilter: {
                  xs: 'blur(30px) saturate(200%)',
                  sm: 'none',
                },
                WebkitBackdropFilter: {
                  xs: 'blur(30px) saturate(200%)',
                  sm: 'none',
                },
                borderRadius: {
                  xs: 3,
                  sm: 0,
                },
                position: 'relative',
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                gap: .5,
                '&::before': {
                  content: {
                    xs: '""',
                    sm: 'none',
                  },
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '50%',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)',
                  pointerEvents: 'none',
                },
              }}
            >
              {firstRow.media.map((item, index) => (
                <Box
                  key={`${firstRow.id}-media-${index}`}
                  component={item.type === 'video' ? 'video' : 'img'}
                  src={item.src}
                  height={item.height}
                  sx={{
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain',
                  }}
                  alt={item.alt}
                  {...(item.controls && { controls: true })}
                />
              ))}
            </Box>
            <Box
              sx={{
                width: {
                  xs: '100%',
                  md: firstRow.descriptionWidth || 'auto',
                },
                flex: {
                  xs: 'none',
                  md: 1,
                },
                verticalAlign: 'top',
                boxShadow: {
                  xs: `
                    0 8px 32px 0 rgba(31, 38, 135, 0.15),
                    inset 0 1px 0 0 rgba(255, 255, 255, 0.6),
                    inset -1px 0 0 0 rgba(255, 255, 255, 0.3),
                    0 1px 3px rgba(0, 0, 0, 0.05)
                  `,
                  sm: '1px 1px 5px rgba(0,0,0,0.4)',
                },
                padding: {
                  xs: 1.5,
                  md: 2,
                },
                background: {
                  xs: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.65) 100%)',
                  sm: 'white',
                },
                backdropFilter: {
                  xs: 'blur(30px) saturate(200%)',
                  sm: 'none',
                },
                WebkitBackdropFilter: {
                  xs: 'blur(30px) saturate(200%)',
                  sm: 'none',
                },
                border: {
                  xs: '1px solid rgba(255, 255, 255, 0.4)',
                  sm: '1px solid #ddd',
                },
                borderTop: {
                  xs: '1px solid rgba(255, 255, 255, 0.6)',
                  sm: 'none',
                },
                borderLeft: {
                  xs: '1px solid rgba(255, 255, 255, 0.6)',
                  sm: 'none',
                },
                borderRadius: {
                  xs: 3,
                  sm: 0,
                },
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: {
                    xs: '""',
                    sm: 'none',
                  },
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '50%',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)',
                  pointerEvents: 'none',
                },
              }}
            >
              <Typography 
                variant="body1"
              >
                {firstRow.description}
              </Typography>
            </Box>
          </Box>

          {/* Show/hide button row */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {/* Thumbnail preview grid */}
            <Box
              sx={{
                display: 'flex',
                gap: 0.5,
                flex: 1,
                flexWrap: 'nowrap',
                height: '49px', // Match IconButton height (paddingY: 1.5 = 12px * 2 + body2 line height ~25px)
                alignItems: 'center',
                opacity: expanded ? 0 : 1,
                clipPath: expanded ? 'inset(50% 0% 50% 0%)' : 'inset(0% 0% 0% 0%)',
                overflow: 'hidden',
                transition: 'opacity 0.4s ease-in-out, clip-path 0.4s ease-in-out',
                pointerEvents: expanded ? 'none' : 'auto',
              }}
            >
              {remainingRows
                .filter(row => row.media.length > 0 && row.media[0].type === 'image')
                .slice(0, 10)
                .map((row) => {
                  const mediaItem = row.media[0];
                  return (
                    <Box
                      key={`${row.id}-preview`}
                      sx={{
                        width: '10dvh',
                        height: '10dvh',
                        flexShrink: 0,
                        borderRadius: 1,
                        border: '1px solid rgba(200, 200, 200, 0.5)',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                        overflow: 'hidden',
                        position: 'relative',
                        '& img': {
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                        },
                      }}
                    >
                      <Image
                        src={mediaItem.src}
                        alt={mediaItem.alt}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </Box>
                  );
                })}
            </Box>
            
            <IconButton
              onClick={() => setExpanded(!expanded)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                textTransform: 'none',
                minWidth: 140,
                background: {
                  xs: 'linear-gradient(135deg, rgba(138, 138, 138, 1) 0%, rgba(148, 148, 150, 0.8) 100%)',
                  sm: 'rgba(138, 138, 138, 1)',
                },
                backdropFilter: {
                  xs: 'blur(30px) saturate(200%)',
                  sm: 'none',
                },
                WebkitBackdropFilter: {
                  xs: 'blur(30px) saturate(200%)',
                  sm: 'none',
                },
                border: {
                  xs: '1px solid rgba(168, 168, 168, 0.5)',
                  sm: '1px solid #888',
                },
                borderTop: {
                  xs: '1px solid rgba(178, 178, 178, 0.65)',
                  sm: 'none',
                },
                borderLeft: {
                  xs: '1px solid rgba(178, 178, 178, 0.65)',
                  sm: 'none',
                },
                boxShadow: {
                  xs: `
                    0 8px 32px 0 rgba(16, 19, 68, 0.375),
                    inset 0 1px 0 0 rgba(178, 178, 178, 0.5),
                    inset -1px 0 0 0 rgba(168, 168, 168, 0.3),
                    0 1px 3px rgba(0, 0, 0, 0.425)
                  `,
                  sm: '1px 1px 5px rgba(0,0,0,0.6)',
                },
                borderRadius: {
                  xs: 3,
                  sm: 1,
                },
                paddingY: 1.5,
                paddingX: 2,
                position: 'relative',
                overflow: 'hidden',
                color: {
                  xs: 'white',
                  // sm: '#929292',
                },
                '&::before': {
                  content: {
                    xs: '""',
                    sm: 'none',
                  },
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '50%',
                  background: 'linear-gradient(180deg, rgba(158, 158, 158, 0.3) 0%, rgba(158, 158, 158, 0) 100%)',
                  pointerEvents: 'none',
                },
                '&:hover': {
                  background: {
                    xs: 'linear-gradient(135deg, rgba(143, 143, 143, 0.975) 0%, rgba(153, 153, 155, 0.775) 100%)',
                    sm: 'rgba(143, 143, 143, 1)',
                  },
                },
              }}
            >
              <Typography 
                variant="body2" 
                sx={{
                  textAlign: 'center',
                  color: 'inherit',
                }}
              >
                {expanded ? 'show less' : 'show more'}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  marginRight: -0.75,
                }}
              >
                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </Box>
            </IconButton>
          </Box>

          {/* Remaining rows - collapsible */}
          <Collapse in={expanded} timeout="auto">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {remainingRows.map((row) => (
            <Box
              key={row.id}
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  md: 'row',
                },
                width: '100%',
                backgroundColor:'transparent',
                gap: {
                  xs: 1,
                  md: 2,
                },
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: '100%',
                    md: row.mediaWidth || '30%',
                  },
                  minHeight: row.mediaHeight,
                  verticalAlign: 'top',
                  padding: {
                    xs: 1,
                    md: 2,
                  },
                  boxShadow: {
                    xs: `
                      0 8px 32px 0 rgba(31, 38, 135, 0.15),
                      inset 0 1px 0 0 rgba(255, 255, 255, 0.6),
                      inset -1px 0 0 0 rgba(255, 255, 255, 0.3),
                      0 1px 3px rgba(0, 0, 0, 0.05)
                    `,
                    sm: '1px 1px 5px rgba(0,0,0,0.4)',
                  },
                  border: {
                    xs: '1px solid rgba(255, 255, 255, 0.4)',
                    sm: '1px solid #ddd',
                  },
                  borderTop: {
                    xs: '1px solid rgba(255, 255, 255, 0.6)',
                    sm: 'none',
                  },
                  borderLeft: {
                    xs: '1px solid rgba(255, 255, 255, 0.6)',
                    sm: 'none',
                  },
                  display: 'flex',
                  background: {
                    xs: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.65) 100%)',
                    sm: 'white',
                  },
                  backdropFilter: {
                    xs: 'blur(30px) saturate(200%)',
                    sm: 'none',
                  },
                  WebkitBackdropFilter: {
                    xs: 'blur(30px) saturate(200%)',
                    sm: 'none',
                  },
                  borderRadius: {
                    xs: 3,
                    sm: 0,
                  },
                  position: 'relative',
                  overflow: 'hidden',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  gap: .5,
                  '&::before': {
                    content: {
                      xs: '""',
                      sm: 'none',
                    },
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)',
                    pointerEvents: 'none',
                  },
                }}
              >
                {row.media.map((item, index) => (
                  <Box
                    key={`${row.id}-media-${index}`}
                    component={item.type === 'video' ? 'video' : 'img'}
                    src={item.src}
                    height={item.height}
                    sx={{
                      width: 'auto',
                      maxWidth: '100%',
                      objectFit: 'contain',
                    }}
                    alt={item.alt}
                    {...(item.controls && { controls: true })}
                  />
                ))}
              </Box>
              <Box
                sx={{
                  width: {
                    xs: '100%',
                    md: row.descriptionWidth || 'auto',
                  },
                  flex: {
                    xs: 'none',
                    md: 1,
                  },
                  verticalAlign: 'top',
                  boxShadow: {
                    xs: `
                      0 8px 32px 0 rgba(31, 38, 135, 0.15),
                      inset 0 1px 0 0 rgba(255, 255, 255, 0.6),
                      inset -1px 0 0 0 rgba(255, 255, 255, 0.3),
                      0 1px 3px rgba(0, 0, 0, 0.05)
                    `,
                    sm: '1px 1px 5px rgba(0,0,0,0.4)',
                  },
                  padding: {
                    xs: 1.5,
                    md: 2,
                  },
                  background: {
                    xs: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.65) 100%)',
                    sm: 'white',
                  },
                  backdropFilter: {
                    xs: 'blur(30px) saturate(200%)',
                    sm: 'none',
                  },
                  WebkitBackdropFilter: {
                    xs: 'blur(30px) saturate(200%)',
                    sm: 'none',
                  },
                  border: {
                    xs: '1px solid rgba(255, 255, 255, 0.4)',
                    sm: '1px solid #ddd',
                  },
                  borderTop: {
                    xs: '1px solid rgba(255, 255, 255, 0.6)',
                    sm: 'none',
                  },
                  borderLeft: {
                    xs: '1px solid rgba(255, 255, 255, 0.6)',
                    sm: 'none',
                  },
                  borderRadius: {
                    xs: 3,
                    sm: 0,
                  },
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: {
                      xs: '""',
                      sm: 'none',
                    },
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)',
                    pointerEvents: 'none',
                  },
                }}
              >
                <Typography 
                  variant="body1"
                >
                  {row.description}
                </Typography>
              </Box>
            </Box>
          ))}
            </Box>
          </Collapse>
        </Box>
      </Paper>
    </Box>
  );
}
