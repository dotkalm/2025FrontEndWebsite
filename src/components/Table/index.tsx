import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';

export default function AboutTable() {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell width="30%">
            <Box
              component="img"
              src="https://github.com/user-attachments/assets/c8676e21-c833-44de-9020-98b5219523e6"
              height="240px"
              sx={{ width: 'auto', maxWidth: '100%' }}
              alt="francesca"
            />
          </TableCell>
          <TableCell>
            A programmer, an artist, a father
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell width="30%">
            <Box
              component="img"
              src="https://github.com/user-attachments/assets/01fc1048-fe1b-4cbd-905f-cb6808c62741"
              height="240px"
              sx={{ width: 'auto', maxWidth: '100%' }}
              alt="pups"
            />
          </TableCell>
          <TableCell width="50%">
            In 2010 I had some viral fame for creating a grid of found youtube videos showing dogs freaking out to the law&order theme song.
            <br /><br />
            https://boingboing.net/2010/02/23/rachel-maddow-on-dog.html
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell width="30%">
            <Box
              component="img"
              src="https://github.com/user-attachments/assets/71e56717-b864-4edc-ac76-30a665791371"
              height="240px"
              sx={{ width: 'auto', maxWidth: '100%' }}
              alt="bob"
            />
          </TableCell>
          <TableCell>
            I was a founder of NastyNets, an influential <em>web surfing blog</em>. Here I am at the Sundance Festival showing Robert Redford all of my <em>taco related purchases</em>
            <br /><br />
            https://anthology.rhizome.org/nasty-nets
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell width="30%">
            <Box
              component="img"
              src="https://github.com/user-attachments/assets/a2f88207-f79e-450b-bb78-86809bcc6308"
              height="240px"
              sx={{ width: 'auto', maxWidth: '100%' }}
              alt="legendary-account-FREE"
            />
          </TableCell>
          <TableCell>
            The first work I had shown in a museum was an installation of questions I asked on Yahoo! Answers. Here is <em>Legendary Account</em> at the New Museum in NYC in 2009.
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell width="30%" height="130px">
            <Box
              component="video"
              src="https://github.com/user-attachments/assets/a2782f94-dd35-412d-b7bb-9966356aa75e"
              height="120px"
              sx={{ width: 'auto', maxWidth: '100%' }}
              controls
            />
          </TableCell>
          <TableCell>
            I used to be DJ Filetype SWF, <em>web-surfing music performance</em>, where I would DJ found websites that used autoplay. Video is from AND Festival in Liverpool, UK, 2011
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell width="30%">
            <Box
              component="img"
              src="https://github.com/user-attachments/assets/deb8f96e-933e-48ca-a0ed-9bc5a2a664ee"
              height="180px"
              sx={{ width: 'auto', maxWidth: '100%' }}
              alt="modern office furniture"
            />
          </TableCell>
          <TableCell>
            I recieved an MFA from Yale in 2013. I made these custom roller shades for my thesis show.
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell width="30%">
            <Box
              component="img"
              src="https://github.com/user-attachments/assets/d48b0121-dc5a-4f92-b832-ae3fddb653bd"
              height="180px"
              sx={{ width: 'auto', maxWidth: '100%' }}
              alt="modern office furniture"
            />
            <Box
              component="img"
              src="https://github.com/user-attachments/assets/7d7f598d-d479-413c-b775-defa46efe686"
              height="180px"
              sx={{ width: 'auto', maxWidth: '100%' }}
              alt="modern office furniture"
            />
          </TableCell>
          <TableCell>
            Here are some modern office furnishing from my first solo exhibition: <em>Soft Laws</em> at American Contemporary, NY, 2013
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell width="30%">
            <Box
              component="img"
              src="https://github.com/user-attachments/assets/8919c6cc-cf93-4853-a146-68e8d9bf6b13"
              height="240px"
              sx={{ width: 'auto', maxWidth: '100%' }}
              alt="press conference"
            />
          </TableCell>
          <TableCell>
            Collectors commissioned me to dig through their stuff so that I could find microphone shaped objects to make a <em>press conference sculpture</em> as a portrait of them.
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell width="30%">
            <Box
              component="img"
              src="https://github.com/user-attachments/assets/dcfe8b63-74c8-4513-93fb-5d70d4d3d659"
              height="240px"
              sx={{ width: 'auto', maxWidth: '100%' }}
              alt="Hammer Museum"
            />
          </TableCell>
          <TableCell>
            I made large scale paintings of websites and showed them at the <strong>Hammer Museum</strong> in 2016
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
